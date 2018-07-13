var Jugador = /** @class */ (function () {
    function Jugador(nombre, dorsal) {
        this.goles = 0;
        this.nombre = nombre;
        this.dorsal = dorsal;
    }
    Jugador.prototype.marcarGol = function () {
        this.goles++;
    };
    return Jugador;
}());
var jugador1 = new Jugador('Cristiano Ronaldo', 7);
jugador1.marcarGol();
