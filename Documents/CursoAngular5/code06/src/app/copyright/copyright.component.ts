import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  template: `<p>&copy Santander 2018<p>`,
  styles: ['p {color: violet;}']
})
export class CopyrightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
