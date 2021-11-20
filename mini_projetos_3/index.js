const img = document.getElementById('img_semafaro');
const buttons = document.querySelector('#botoes');
const btnAutomatico = document.querySelector("automatico");
let corInicial = 0;
let Intervalo = null;

const semafaro = (event) => {
    cores[event.target.id]();
}

const proximaCor = () => corInicial = corInicial < 2 ? ++corInicial : 0;

const corAutomatica = () => {
    const colors = ['verde', 'amarelo', 'vermelho']
    const color = colors[corInicial];
    cores[color]();
    proximaCor();
}

const paraAutomatico = () => {
    clearInterval(Intervalo);
}

const cores = {
    'vermelho': () => img.src = './img/vermelho.png',
    'amarelo': () => img.src = './img/amarelo.png',
    'verde': () => img.src = './img/verde.png',
    'desligar_semafaro': () => img.src = './img/desligado.png'
}

const coresAutomatica = {
    'automatico': () => Intervalo = setInterval(corAutomatica, 1000)
}

buttons.addEventListener('click', semafaro);

let test = coresAutomatica.automatico;

// essa funtion serve para ligar e desligar


function ligar() {
    const ligar = document.querySelector("#ligar");
    ligar.addEventListener('click', test, true);
}

function desligar() {
    const ligar = document.querySelector("#desligar");
    ligar.addEventListener('click', paraAutomatico, true);
}

document.addEventListener("DOMContentLoaded", ligar, false);
document.addEventListener("DOMContentLoaded", desligar, false);

//sumir e aparecer o menu de ligar
const classLigar = document.querySelector(".ligar_e_desliga");

function mostra() {
    if (document.querySelector('.ligar_e_desliga').style.visibility === 'hidden') {
        let pesquisa = document.querySelector('.ligar_e_desliga').style.visibility = 'visible';
    } else {
        document.querySelector('.ligar_e_desliga').style.visibility = 'hidden';
    }
}