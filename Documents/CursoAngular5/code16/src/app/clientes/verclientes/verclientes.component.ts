import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from '../../servicios/clientes.service';

@Component({
  selector: 'app-verclientes',
  templateUrl: './verclientes.component.html',
  styleUrls: ['./verclientes.component.css']
})
export class VerclientesComponent implements OnInit {

  id:number|string;
  cliente:any;

  constructor(private route: ActivatedRoute,private clientesServices:ClientesService) { }

  ngOnInit() {
    this.id= this.route.snapshot.params['id'];
    this.cliente = this.clientesServices.getCliente(this.id);
  }

}
