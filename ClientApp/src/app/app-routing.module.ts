import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import {BuscarComponent} from './buscar/buscar.component';
import {CancelarCitaComponent} from './cancelar-cita/cancelar-cita.component';
import{CrearPerfilComponent} from './crear-perfil/crear-perfil.component';
import {EditarPerfilComponent} from './editar-perfil/editar-perfil.component';
const routes: Routes= [
  {
    path:'Buscar',
    component:BuscarComponent
  },
  
  {
    path:'CancelarCita',
    component:CancelarCitaComponent
    },
    {
      path:'CrearPerfil',
      component:CrearPerfilComponent
      },
     {
      path:'EditarPerfil',
       component:EditarPerfilComponent
     },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
