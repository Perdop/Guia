
import {main} from '../script.js';
import {defineColumns, groups, groupsColors, shortcutID, shortcutNames, shortcutTypes, shortcutLinks, shortcutBgs, shortcutImgs, shortcutImgsSizes, shortcutGroups, shortcutPosition} from './settings.js';

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
            shortcut.style.backgroundImage= `URL(https://www.google.com/s2/favicons?sz=256&domain_url=https%3A%2F%2F${shortcutURL.host})`
        } else{
            shortcut.style.backgroundImage = `URL(${shortcutImgs[i]})`
        }

        // Define o tamanho da imagem do atalho
        if (shortcutImgsSizes[i] === 'default') {
            shortcut.style.backgroundSize = `60%`
        } else{
            shortcut.style.backgroundSize = `${shortcutImgsSizes[i]}%`
        }

        // Define o grupo do atalho
        let shortcutDiv = document.querySelector(`#shortcutDiv${i}`)
        shortcutDiv.style.background = `${groupsColors[groups.indexOf(shortcutGroups[i])]}`

        //Define posicao do atalho
        if (shortcutPosition[i] ===  'default') {
            
        }else{
            if (shortcutPosition[i][0] > defineColumns ) {
                shortcutDiv.style.gridColumn = `${defineColumns}/${defineColumns + 1}`
                console.log('Coluna definida maior que limite de colunas')
            } else{
                shortcutDiv.style.gridColumn = `${shortcutPosition[i][0]}/${shortcutPosition[i][0] + 1}`
            }
            shortcutDiv.style.gridRow = `${shortcutPosition[i][1]}/${shortcutPosition[i][1] + 1}`
        }
        
        i++
    }
}
