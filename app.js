// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo=document.querySelector('p');
// paragrafo.innerHTML= 'Escolha um número entre 1 e 100';
let listaNumeroSorteado = [];
let numeroMaximo = 50;
let numeroSecreto = gerarNumeroSecreto();
let tentativa = 1;

function exibirTextonaTela (tag, texto){
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female');
}

function exibirMensagemInicial (){
    exibirTextonaTela ('h1', "Jogo do Número Secreto");
    exibirTextonaTela ('p', 'Escolha um número entre 1 e 50');
}

exibirMensagemInicial();
function verificarChute() {
    let chute = document.querySelector ('input').value;    

    if (chute == numeroSecreto){
        let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativa} ${palavraTentativa}!`;
        exibirTextonaTela ('h1', "Parabéns!!! Você acertou")
        exibirTextonaTela ('p', mensagemTentativa);
        document.getElementById ('reiniciar').removeAttribute ('disabled');
    } else {
        exibirTextonaTela('h1', "Tente Novamente")
        if (chute > numeroSecreto){
            exibirTextonaTela ('p', "O numero secreto é menor");
        } else {
            (chute < numeroSecreto) 
                exibirTextonaTela ('p', "O numero secreto é maior");
            }
        }
        tentativa++;
        limparCampo ();
    }

function gerarNumeroSecreto() {
    let numeroEscolhido = parseInt (Math.random () *numeroMaximo +1);
    let quantidadeElementosLista = listaNumeroSorteado.length;

    if (quantidadeElementosLista == numeroMaximo){
        listaNumeroSorteado = [];
    }
    if (listaNumeroSorteado.includes (numeroEscolhido)){
        return gerarNumeroSecreto();
    } else {
        listaNumeroSorteado.push(numeroEscolhido);
        console.log (listaNumeroSorteado);
        return numeroEscolhido;
    }
}

function limparCampo (){
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroSecreto();
    limparCampo ();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById ('reiniciar').setAttribute ('disabled', true);
}