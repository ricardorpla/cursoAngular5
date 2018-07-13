import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivangswitch',
  templateUrl: './directivangswitch.component.html',
  styleUrls: ['./directivangswitch.component.css']
})
export class DirectivangswitchComponent implements OnInit {

  jugadores =[
    {nombre :'Kule Kuzma', equipo:'lakers'},
    {nombre :'Alon Bynes', equipo:'celtics'},
    {nombre :'Justin Holiday', equipo:'bulls'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
