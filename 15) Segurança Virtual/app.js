const listas = [
    {dono: "Lucas", convidados: ['Lucas Aragão', 'Pablo', 'Luana', 'Vitor'] },
    {dono: "Maiara", convidados: ['Robert', 'Saulo']}];


function verificar() {
    let encontrado = false;
    const nomeConvidado = document.getElementById('nome').value;
    const nomeQuemConvidou = document.getElementById('quem_convidou').value;

    listas.forEach(function(lista) {
        if (lista.dono == nomeQuemConvidou) {
            if (lista.convidados.includes(nomeConvidado)) {
                encontrado = true;
                console.log('Foi encontrado!');
            }
            
        } 
    });

    if (encontrado) {
        document.getElementById('pesquisar').innerHTML = 'Está permitido entrar!';
    } else {
        document.getElementById('pesquisar').innerHTML = 'Nao está permitido entrar!';
    }
}