import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appCargaSuave]'
})
export class CargaSuaveDirective implements OnInit {

  constructor(private elementRef:ElementRef, private redered2:Renderer2) { }

  ngOnInit(){
    setTimeout(()=>{
        this.redered2.addClass(this.elementRef.nativeElement,'mostrado');
    },1);
  }

}
