function CuentaBancaria(titular, saldoInicial){
this.titular = titular;
this.saldo = saldoInicial
}

CuentaBancaria.prototype.depositar = function(monto){
    if (monto > 0){
        this.saldo += monto;
        console.log("Deposito ingresado correctamente, su nuevo saldo es de: ", this.saldo)
    } else {
        console.log("Ingrese un saldo mayor a 0")
    }
};

CuentaBancaria.prototype.extraer = function(monto) {
    if(monto < this.saldo){
        this.saldo -= monto;
        console.log("Dinero extraido correctamente, su nuevo saldo es de: ", this.saldo)
    } else {
        console.log("Ingrese una cantidad de dinero que disponga")
    }
};

CuentaBancaria.prototype.consultarSaldo = function(){
    console.log("Su saldo actual es de: ", this.saldo)
}

const cuenta1 = new CuentaBancaria("Gaston",1000)

cuenta1.consultarSaldo()
cuenta1.depositar(1000)
cuenta1.extraer(500)
cuenta1.consultarSaldo()