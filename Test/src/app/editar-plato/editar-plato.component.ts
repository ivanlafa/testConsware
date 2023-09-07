import { Component, OnInit } from '@angular/core';
import { PlatoModel } from '../shared/platos.model';
import { PlatoService } from '../shared/plato.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-plato',
  templateUrl: './editar-plato.component.html',
  styleUrls: ['./editar-plato.component.css']
})
export class EditarPlatoComponent implements OnInit {
  id=  ''
  plato = new PlatoModel("","","");

  constructor(
    private platoService: PlatoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    if(this.id) {
      console.log("EDITAR");
      this.platoService.obtenerPlato(this.id).subscribe(data => {
        this.plato = data[0]
      }, error => {
        console.log(error);
      })
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {
    console.log('onSubmit');

    if(this.plato.id_plato) {
      this.platoService.actualizarPlato(this.plato).subscribe(data => {
        alert(data)
        this.router.navigate(['/platos'])
      })
    } else {
      console.log('crear');
      this.platoService.agregarPlato(this.plato).subscribe(data => {
        alert(data)
        this.router.navigate(['/platos'])
      })
    }
  }

}
