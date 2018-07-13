import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  texto ='ciudad de santander';
  id:any= 3;
  fecha:Date = new Date();
  importe =79.135;
  aciertos = 0.0876;
  jugador={
    nombre:'Cristiano',
    apellidos:'Ronaldo'
  };
  cantidad = 1200.83838383838838388;

  ngOnInit(){
    this.id='00000' +this.id;
  }
}
