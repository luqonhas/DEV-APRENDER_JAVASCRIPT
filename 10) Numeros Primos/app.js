exibirNumerosPrimos(20);

function exibirNumerosPrimos(valorLimite){
    for(let numero = 2; numero <= valorLimite; numero++){
        let numeroPrimo = true;

        for(let divisor = 2; divisor < numero; divisor++){
            if (numero % divisor === 0) numeroPrimo = false; break;
        }
        if (numeroPrimo) console.log(numero)
    }
}