// Search / Chama a funcao buscar
import * as search from './modules/search.js';

var searchBar = document.getElementById('search');

searchBar.addEventListener('keydown', search.searchFunction)

// Main / Define o numero de colunas
import * as settings from './modules/settings.js';
var main = document.querySelector('main');
main.style.gridTemplateColumns= `repeat(${settings.defineColumns}, auto)`;

// Footer
// Abre e fecha o botao de adicionar
var newBtn = document.querySelector('#newBtn');
var newBtnOptions = document.querySelector('#newBtnOptions');
var newBtnCheck = document.querySelector('#newBtnCheck');

function newBtnFunction() {
    switch (newBtnCheck.checked) {
        case false:
            newBtnOptions.classList.add('show');
            newBtnCheck.checked = true
            break;
        case true:
            newBtnOptions.classList.remove('show');
            newBtnCheck.checked = false
            break;
    }
}

newBtn.addEventListener('click', newBtnFunction); 