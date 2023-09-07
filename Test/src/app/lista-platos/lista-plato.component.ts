
import { Component, OnInit } from '@angular/core';
import { PlatoModel } from '../shared/platos.model';
import { PlatoService } from '../shared/plato.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-plato',
  templateUrl: './lista-plato.component.html',
  styleUrls: ['./lista-plato.component.css']
})
export class ListaPlatoComponent implements OnInit  {

  platos: Observable<PlatoModel[]> | undefined;
  platoService: any;

  constructor(private PlatoService: PlatoService) { }

  ngOnInit() {
      this.platos = this.platoService.obtenerPlatos();
  }

  borrarUsuario(id: string) {
    this.platoService.borrarPlato(id).subscribe((data: any) => {
      console.log(data);
    })
  }
}
