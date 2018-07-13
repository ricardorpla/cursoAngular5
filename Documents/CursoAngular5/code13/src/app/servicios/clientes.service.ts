import { Injectable } from '@angular/core';
import {Cliente} from '../model/cliente.model'

@Injectable({
  providedIn: 'root'//Nuevo en angular 6 Antes se metian en el app.module
})
export class ClientesService {
  clientes:Array<Cliente> =[
    {nombre:'Iberdrola', cif:'A12345678'},
    {nombre:'Gas Natural', cif:'A87654321'},
    {nombre:'Vodafone', cif:'A6789543'}
  ];
  username:string='Pedro';

  constructor() { }

  getClientes():Array<Cliente>{
    return this.clientes;
  }

  postCliente(cliente:Cliente){
    this.clientes.push(cliente);

  }

}
