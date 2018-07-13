import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ListadoClientesComponent } from './clientes/listado-clientes/listado-clientes.component';
import { NavComponent } from './nav/nav.component';
import { InicioComponent } from './inicio/inicio.component';
import { VerclientesComponent } from './clientes/verclientes/verclientes.component';
import { LoginGuard } from './login.guard';
import { ComunesModule } from './comunes/comunes.module';
import { RrhhModule } from './rrhh/rrhh.module';


const rutas:Routes =[
  {path:'',component:InicioComponent},
  {path:'listado-clientes', component:ListadoClientesComponent, data:{titulo:'listado de clientes'}},
  {path:'ver-cliente/:id', component:VerclientesComponent,canActivate:[LoginGuard]},
  {path:'recursos-humanos', loadChildren:'src/app/rrhh/rrhh.module#RrhhModule'},
  {path:'**', component:InicioComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ListadoClientesComponent,
    NavComponent,
    InicioComponent,
    VerclientesComponent
  ],
  imports: [
    BrowserModule,
    ComunesModule,
    RrhhModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
