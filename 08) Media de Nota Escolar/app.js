const array = [70, 70, 80];

console.log(mediaAluno(array));

function mediaAluno(notas){
    const media = calcularMedia(notas);

    // caso a média seja menor que...
    if (media < 49) return "Sua nota no boletim será 'F'";
    if (media < 59) return "Sua nota no boletim será 'E'";
    if (media < 69) return "Sua nota no boletim será 'D'";
    if (media < 79) return "Sua nota no boletim será 'C'";
    if (media < 89) return "Sua nota no boletim será 'B'";
    return "Sua nota no boletim será 'A'";
}

function calcularMedia(valores){
    let soma = 0;
    for(let valor of valores){
        soma += valor;
    }
    return soma / (valores.length);
}