const filme = {
    titulo : "Homem-Aranha: Sem Volta para Casa",
    anoLancamento : 2021,
    empresa : "Disney/Marvel"
}

exibirStrings(filme)

function exibirStrings(obj) {
    for(prop in obj){
        // obj[prop] = pegamos o que tem dentro do objeto
        if (typeof obj[prop] === 'string') {
            console.log(prop + " = " +obj[prop])
        }
    }
}