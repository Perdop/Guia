
var groups = ['none', 'navegadores']
var groupsColors = ['none', 'darkgreen']

var shortcutID = [0,1,2]
var shortcutNames = ['Google', 'Proton', 'Bing']
var shortcutTypes = ['shortcut', 'shortcut', 'shortcut'];
var shortcutLinks = ['https://google.com/', 'https://proton.me/', 'https://Bing.com']; 
var shortcutBgs = ['default', 'default', 'default']
var shortcutImgs = ['default', 'default', 'default']
var shortcutImgsSizes = ['default','default', 'deault']
var shortcutGroups = [groups[0], groups[0], groups[0]]

import {main} from '../script.js';

export function shortcutMaker(){
    let i = 0
    for (const x of shortcutNames) {
        // Cria o atalho
        main.innerHTML += `<div aria-hidden id='shortcutDiv${i}' class="shortcutsDiv"><a href="${shortcutLinks[i]}" id="shortcut${i}" class="shortcuts"></a></div>`;
        let shortcut = document.querySelector(`#shortcut${i}`)
        
        // Define o a cor do background
        if (shortcutBgs[i] === 'default') { 
            shortcut.style.background= `black`  
        } else{
            shortcut.style.background = `${shortcutBgs[i]}`
        }
       
        // Define a imagem do atalho
        if (shortcutImgs[i] === 'default') { 
            let shortcutURL = new URL(shortcutLinks[i])
            shortcut.style.backgroundImage= `URL(${shortcutURL.protocol}//${shortcutURL.host}/favicon.ico)`  
        } else{
            shortcut.style.backgroundImage = `URL(${shortcutImgs[i]})`
        }

        // Define o tamanho da imagem do atalho
        if (shortcutImgsSizes[i] === 'default') { 
            shortcut.style.backgroundSize = `50%`
        } else{
            shortcut.style.backgroundSize = `${shortcutImgsSizes[i]}%`
        }

        // Define o grupo do atalho
        let shortcutDiv = document.querySelector(`#shortcutDiv${i}`)
        shortcutDiv.style.background = `${groupsColors[groups.indexOf(shortcutGroups[i])]}`

        
        
        i++
    }
}
