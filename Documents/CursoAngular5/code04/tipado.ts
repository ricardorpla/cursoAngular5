//Tipos de datos primitivos

let mensaje: string;

mensaje ='Hola mundo';

//Number
let resultado: number;
resultado=9.5;

//Boolean
let mayorEdad: boolean;
mayorEdad = true;

//Array
let frutas : string [];
let coches : Array<string>;

coches=['Renault','Opel','Mercedes'];

//Any ("eliminar la inferencia del tipado de datos")

let edad: any = 35;
edad = 'Cuarenta';

//Enum

enum TallaPantalon {small, medium, large};

let pantalon : TallaPantalon = TallaPantalon.small;

//Devolvera 0

enum TallaZapato {uk5 = 43, uk6 = 45};

let zapatilla:TallaZapato = TallaZapato.uk5;

//console.log(zapatilla) devuelve 43

//Void

function saludo():void{
    console.log('Hola Mundo!');
}

let variable:void =undefined;
variable = null;

//Tipado de objetos
let jugador:object;
jugador = {nombre: 'Cristiano' , apellidos:'Ronaldo'};

let jugador2:{nombre:string, edad:number};

jugador2={nombre: 'Lionel',edad:32};

//Tipo de union

let fechaNac:number | string;

fechaNac =12;
fechaNac='doce';

type id = string | number;

let ref:id;
ref = 123;
ref = 'asdr43';

//Tipos de union complejos

type perro = 'Pastor Aleman' |'Dogo'|'Mastin';
//let toby:perro='Chow chow';error porque no es del tipo
let toby:perro='Pastor Aleman';

//Tipos de funciones

function suma(a:number, b:number):number{
    return a+b;
}
//suma(2,'2');//Error
suma(2,2);

//Parametors opcionales
function multi(a:number, b:number,mensaje?:string):string{
    let resultado = a*b;
    if(mensaje){
        return mensaje + resultado;
    }else{
        return `El resultado es ${resultado} `;
    }

}

multi(2,4);
multi(4,5,'Puntuacion: ');

//Tipos genericos ("El tipo se definirá en tiempo de ejecucion")

function devuelveResultado<T>(a:T):T{
    return a;
}

devuelveResultado<string>('Hola Mundo');
devuelveResultado<number>(12);









