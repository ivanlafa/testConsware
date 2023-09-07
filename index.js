const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.use(bodyParser.json())

const PUERTO = 3000

const conexion = mysql.createConnection(
    {
        host:'localhost',
        database:'pruebas',
        user:'root',
        password:''
    }
)

app.listen(PUERTO, () => {
    console.log(`Servidor iniciado en el puerto:  ${PUERTO}`);
})

conexion.connect(error => {
    if(error) throw error
    console.log('Conexión exitosa a la base de datos');
})

app.get('/', (req, res) => {
    res.send('API')
})

app.get('/platos', (req, res) => {
    const query = `SELECT * FROM platos;`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros`)
        }
    })
})

app.get('/platos/:id', (req, res) => {
    const { id } = req.params

    const query = `SELECT * FROM platos WHERE id_plato=${id};`
    conexion.query(query, (error, resultado) => {
        if(error) return console.error(error.message)

        if(resultado.length > 0) {
            res.json(resultado)
        } else {
            res.json(`No hay registros con ese id`)
        }
    })
})

app.post('/platos/agregar', (req, res) => {
    const usuario = {
        nombre: req.body.nombre,
        email: req.body.email
    }

    const query = `INSERT INTO platos SET ?`
    conexion.query(query, usuario, (error) => {
        if(error) return console.error(error.message)

        res.json(`Se inserto correctamente el plato`)
    })
})

app.put('/platos/actualizar/:id', (req, res) => {
    const { id } = req.params
    const { nombre, email } = req.body

    const query = `UPDATE usuarios SET nombre='${nombre}', descripcion='${descripcion}' WHERE id_plato='${id}';`
    conexion.query(query, (error) => {
        if(error) return console.error(error.message)

        res.json(`Se actualizo correctamente el plato`)
    })
})

app.delete('/platos/borrar/:id', (req, res) => {
    const { id } = req.params

    const query = `DELETE FROM platos WHERE id_plato=${id};`
    conexion.query(query, (error) => {
        if(error) console.error(error.message)

        res.json(`Se elimino correctamente el plato`)
    })
})