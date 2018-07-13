import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoEmpleadosComponent } from './empleados/listado-empleados/listado-empleados.component';
import { Router, Routes, RouterModule } from '@angular/router';
import { ListadoNominasComponent } from './empleados/listado-nominas/listado-nominas.component';

const rutas : Routes= [
  {path:'',component:ListadoEmpleadosComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ],
  declarations: [ListadoEmpleadosComponent, ListadoNominasComponent]
})
export class RrhhModule { }
