import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  clientes:Array<any> = [
    {id:1,nombre:'Iberdrola',cif: 'A1234567'},
    {id:2,nombre:'Vodafone',cif: 'A87878787'},
    {id:3,nombre:'Gas Natural',cif: 'A100010001'}
  ];

  constructor() { }

  getClientes(){
    return this.clientes;
  }
  
  getCliente(id){
    const clienteSel = this.clientes.find(cliente=>{
      return cliente.id==id;
    });
    return clienteSel;
 }
}
