function Endereco(rua, cidade, cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereco('rua1', 'cidade1', 'cep1');
const endereco2 = new Endereco('rua1', 'cidade1', 'cep1');

function valoresIguais(endereco1, endereco2){
    return endereco1.rua === endereco2.rua &&
    endereco1.cidade === endereco2.cidade &&
    endereco1.cep === endereco2.cep
}

console.log(valoresIguais(endereco1, endereco2))

function enderecoMemoriaIguais(endereco1, endereco2){
    return endereco1 === endereco2;
}

console.log(enderecoMemoriaIguais(endereco1, endereco2))