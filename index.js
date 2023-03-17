const inicioNav = document.querySelector('.inicioNav');
const inicioSec = document.getElementById('inicio');
const bestNav = document.querySelector('.bestNav');
const bestSec = document.getElementById('best');
const ticketsNav = document.querySelector('.ticketsNav');
const ticketsSec = document.getElementById('tickets');
const loginNav = document.querySelector('.loginNav');
const loginSec = document.getElementById('login');
const btnInicio = document.querySelector('.bol-hh');

inicioNav.addEventListener('click', inicioActivate);
bestNav.addEventListener('click', bestActivate);
ticketsNav.addEventListener('click', ticketsActivate);
loginNav.addEventListener('click', loginActivate);
btnInicio.addEventListener('click', ticketsActivate);

function inicioActivate(){
    inicioSec.classList.remove('inactive');
    bestSec.classList.add('inactive');
    ticketsSec.classList.add('inactive');
    loginSec.classList.add('inactive');
}

function bestActivate(){
    bestSec.classList.remove('inactive');
    inicioSec.classList.add('inactive');
    ticketsSec.classList.add('inactive');
    loginSec.classList.add('inactive');
}
function ticketsActivate(){
    ticketsSec.classList.remove('inactive');
    inicioSec.classList.add('inactive');
    bestSec.classList.add('inactive');
    loginSec.classList.add('inactive');
}
function loginActivate(){
    loginSec.classList.remove('inactive');
    inicioSec.classList.add('inactive');
    bestSec.classList.add('inactive');
    ticketsSec.classList.add('inactive');
}