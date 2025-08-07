String.prototype.concatenarPalabra = function(palabra){
    return `${this} ${palabra}`;
}

const texto1 = "Hola"
const resultado1 = texto1.concatenarPalabra("World")

console.log(resultado1)