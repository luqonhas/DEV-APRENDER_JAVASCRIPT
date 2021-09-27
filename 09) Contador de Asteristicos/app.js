exibirAsteristicos(10);

// enquanto a linha for igual a X, o loop de irá rodar X vezes
function exibirAsteristicos(linhas){
    for(let linha = 1; linha <= linhas; linha++){
        let asteristico = '';

        // esse loop irá rodar a quantidade X de vezes que o loop pai rodar
        for(let i = 0; i < linha; i++){
            asteristico += '*';
        }
        console.log(asteristico);
    }
}