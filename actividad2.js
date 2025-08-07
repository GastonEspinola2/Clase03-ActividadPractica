class CuentaBancaria{

    #saldo;
    
    constructor(titular, saldoInicial){
        this.titular = titular;
        this.#saldo = saldoInicial >=0 ? saldoInicial : 0
    }

    get saldo(){
        return this.#saldo
    }

    set saldo(nuevoSaldo){
        if (typeof nuevoSaldo !=="number" || nuevoSaldo < 0){
            console.log("Error, el saldo debe ser un numero positivo")
        } else {
            this.#saldo = nuevoSaldo
        }
    }

    depositar = function(monto){
    if (monto > 0){
        this.saldo += monto;
        console.log("Deposito ingresado correctamente, su nuevo saldo es de: ", this.saldo)
    } else {
        console.log("Ingrese un saldo mayor a 0")
    }
    };

extraer = function(monto) {
    if(monto < this.saldo){
        this.saldo -= monto;
        console.log("Dinero extraido correctamente, su nuevo saldo es de: ", this.saldo)
    } else {
        console.log("Ingrese una cantidad de dinero que disponga")
    }
    };

consultarSaldo = function(){
    console.log("Su saldo actual es de: ", this.saldo)
    }
}

const cuenta2 = new CuentaBancaria("Gaston",5000)

cuenta2.consultarSaldo()
cuenta2.depositar(1000)
cuenta2.extraer(500)
cuenta2.consultarSaldo()