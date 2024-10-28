// Search / Chama a funcao buscar
import * as search from './modules/search.js';

var searchBar = document.getElementById('search');

searchBar.addEventListener('keydown', search.searchFunction)

// Main
// Define o numero de colunas
import {defineColumns, shortcutPosition} from './modules/settings.js';
export var main = document.querySelector('main');
main.style.gridTemplateColumns= `repeat(${defineColumns}, auto)`;

// Conta a ultima linha definida no settings
var lastShortcutRow = 0;
for (const x in shortcutPosition) {
    for (let index = 0; index < x; index++) {
        if (shortcutPosition[x][1] >=  lastShortcutRow) {
            lastShortcutRow = shortcutPosition[x][1]
        }
    }
}

// Define o numero de linhas do grid
main.style.gridTemplateRows= `repeat(${lastShortcutRow}, ${main.clientWidth /defineColumns}px)`;
window.addEventListener('resize', () => main.style.gridTemplateRows = `repeat(${lastShortcutRow}, ${main.clientWidth / defineColumns}px)`);


import {shortcutMaker} from './modules/shortcutMaker.js';
shortcutMaker();

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
// New Shortcuts
var newShortcut = document.querySelector('#newShortcut')
