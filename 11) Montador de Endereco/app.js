let endereco = {
    rua : 'xulubagos xulubengos',
    cidade : 'minas gerais',
    cep : '00000-00'
}

exibirEndereco(endereco);

function exibirEndereco(endereco){
    for (let chave in endereco){
        console.log(chave + ' = ' + endereco[chave]);
    }
}