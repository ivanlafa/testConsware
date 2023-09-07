import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPlatoComponent } from './editar-plato/editar-plato.component';
import { ListaPlatoComponent } from './lista-platos/lista-plato.component';
const routes: Routes = [
  { path:'platos', component: ListaPlatoComponent},
  { path:'platos/editar/:id', component: EditarPlatoComponent },
  { path:'platos/agregar/:id', component: EditarPlatoComponent },
  { path:'**', redirectTo:'/platos', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
