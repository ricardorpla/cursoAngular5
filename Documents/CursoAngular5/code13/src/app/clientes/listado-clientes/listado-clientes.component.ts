import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../../servicios/clientes.service';
import { Cliente } from '../../model/cliente.model';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css']
  //,provides:[clase del servicio solo para este componente]
})
export class ListadoClientesComponent implements OnInit {

  clientes:Array<Cliente>;

  constructor(public clientesService:ClientesService) { }

  ngOnInit() {
    this.clientes = this.clientesService.getClientes();
  }
 


}
