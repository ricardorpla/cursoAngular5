import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeros'
})
export class NumerosPipe implements PipeTransform {

  transform(value: any, decimales:any, moneda?:string): any {
    let factor = Math.pow(10,decimales);
    let redondeo;
    if(value<0){
      redondeo = (Math.round(-value * factor)/factor)*-1;
    }else{
      redondeo = Math.round(value * factor)/factor;
    }
    let formateado = new Intl.NumberFormat('es-ES',{minimumFractionDigits:decimales}).format(redondeo);
    return formateado + (moneda ? moneda:'');
  }

}
