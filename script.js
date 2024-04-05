const AudioCapitulo = document.getElementById ('audio-capitulo');
const BotaoPlayPause = document.getElementById ('play-pause');
const BotaoAvancar = document.getElementById ('avancar');
const BotaoVoltar = document.getElementById ('voltar');
const NomeCapitulo = document.getElementById('capitulo');
const numerocapitulos = 10;

let CapituloAtual = 1;
let taTocando = 0;
   
function tocarFaixa (){
    AudioCapitulo.play();
    BotaoPlayPause.classList.remove('bi-play-circle-fill');
    BotaoPlayPause.classList.add('bi-pause-circle-fill');
}

function PausarFaixa (){
    AudioCapitulo.pause();
    BotaoPlayPause.classList.add('bi-play-circle-fill');
    BotaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function PlayPause (){
    if (taTocando === 0){
        tocarFaixa();
        taTocando = 1;

    } else {
        PausarFaixa();
        taTocando = 0;

    }
}

function Avancar (){
    if (CapituloAtual === numerocapitulos ){
        CapituloAtual = 1;
    }else {
        CapituloAtual = CapituloAtual + 1;
    }
    AudioCapitulo.src = "./books/dom-casmurro/" + CapituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    TrocarNomeCapitulo();
}

function Voltar (){
    if (CapituloAtual === 1 ){
        CapituloAtual = numerocapitulos;
    }else {
        CapituloAtual = CapituloAtual - 1;
    }
    AudioCapitulo.src = "./books/dom-casmurro/" + CapituloAtual + ".mp3";
    tocarFaixa();
    taTocando = 1;
    TrocarNomeCapitulo();
}

function TrocarNomeCapitulo (){
    NomeCapitulo.innerText = 'Capítulo ' + CapituloAtual;
}

//para qualquer evento:
BotaoPlayPause.addEventListener('click', PlayPause);
BotaoAvancar.addEventListener('click', Avancar);
BotaoVoltar.addEventListener('click', Voltar);


