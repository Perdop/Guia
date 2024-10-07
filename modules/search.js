import * as settings from './settings.js'

// Verifica se o atalho confere com o de algum dos definidos, se não busca pelo padrão
function searchHotKeys(x){
    let y = x.toUpperCase();
    let i = 0
    settings.searchHotKeys.forEach(element => {
        if (y === element) {
            let url = settings.searchAdress[i] + searchBar.value;
            window.open(url, '_self')
        } else{
            let url = settings.defaultEngine + searchBar.value;
            window.open(url, '_self')
        }
        i++
    });
}

// Pesquisa
export function searchFunction(event){
    if (event.key === 'Enter') {
        if(searchBar.value != ''){
            if (searchBar.value[1] ===' ' ) {
                searchHotKeys(searchBar.value[0])
            } else{
                let url = settings.defaultEngine + searchBar.value;
                window.open(url, '_self')
            }
            
        }   
    }
}
