interface Jugador{
    nombre: string;
    edad: number;
}

let jugador1:Jugador;

jugador1 = {
    nombre :'Sergio Ramos',
    edad: 22
}

//En la declaracion literal del objeto
//Solo se pueden usar propiedades conocidas

let jugador2:Jugador ={
    nombre: 'Lionel Messi',
    edad :30,
   // goles:32 error no cumple con el tipado de la interfaz
}

//Propiedades opcionales

interface Equipo{
    tipo:string;
    marca:string;
    precioEuros?:number
}

let equipo1:Equipo={
    tipo:'PC',
    marca:'Axus',
   // precioEuros:1000
}