import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlatoModel } from './platos.model'

@Injectable({
  providedIn: 'root'
})
export class PlatoService {
  BASE_URL = "http://localhost:3000"
  constructor(private http: HttpClient) { }


  obtenerPlatos() 
  { 
    return this.http.get<PlatoModel[]>(this.BASE_URL+'/platos');

  }

  obtenerPlato(id: string) {
    return this.http.get<PlatoModel[]>(`${this.BASE_URL}/platos/${id}`);
  }

  agregarPlato(plato: PlatoModel) {
    return this.http.post<string>(`${this.BASE_URL}/platos/agregar`, plato);
  }

  actualizarPlato(plato: PlatoModel) {
    return this.http.put<string>(`${this.BASE_URL}/platos/actualizar/${plato.id_plato}`, plato)
  }

  borrarPlato(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/platos/borrar/${id}`)
  }
}
