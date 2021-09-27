somar(10);

function somar(valorLimite){
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;

    for(i = 0; i <= valorLimite; i++){
        // caso o valor seja multiplo de 3/5, o multiplo é armazenado e é somado com o 'i'
        // o += é apenas um "atalho" para colocar o mesmo valor (exemplo, 'multiplos += i' é igual a 'multiplos = multiplos + i')
        i % 3 === 0 ? multiplosDe3 += i : i % 5 === 0 ? multiplosDe5 += i : ''
    }
    console.log("O valor final entre o múltiplo de 3 (" + multiplosDe3 + ") e múltiplo de 5 (" + multiplosDe5 + ") é igual à " + (multiplosDe3 + multiplosDe5) + "!")
}