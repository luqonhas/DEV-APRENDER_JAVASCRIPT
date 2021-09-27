verificarVelocidade(121);

function verificarVelocidade(velocidade){
    const velocidadeAcima = velocidade - 70;

    // o 'Math.floor' vai arredondar o valor
    const pontos = Math.floor((velocidade - 70) / 5);

    switch (true) {
        // caso o motorista tenha mais de 12 pontos...
        case pontos >= 12:
            console.log("Carteira de motorista suspensa com " + pontos + " pontos!")
            break;
            
        // caso a velocidade seja menor ou igual a 70...
        case velocidade <= 70:
            console.log("Velocidade de " + velocidade + "km/h permitida!")
            break;
        
        // caso a velocidade seja menor ou igual a 70...
        case velocidade > 70:
            console.log("Velocidade de " + velocidade + "km/h não permitida!")
            console.log("O veículo está " + velocidadeAcima + "km/h acima do limite!")
            console.log("Serão adicionados " + pontos + " pontos na carteira de motorista!")
            break;
    
        default:
            break;
    }
}