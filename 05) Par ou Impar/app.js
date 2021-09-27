exibirTipo(5);

function exibirTipo(valorLimite){
    for(let i = 0; i <= valorLimite; i++){
        // caso o valor seja par, retorna PAR || caso o valor o seja impar, retorna IMPAR
        i % 2 === 0 ? console.log("O valor " + i + " é PAR!") : console.log("O valor " + i + " é IMPAR!")
    }
}