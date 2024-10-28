import {searchHotKeys, searchAdress, defaultEngine} from './settings.js'

// Verifica se o atalho confere com o de algum dos definidos, se não busca pelo padrão
function searchHotKey(x){
    let y = x.toUpperCase();
    let i = 0
    for (const element of searchHotKeys) {
        if (y === element) {
            let url = searchAdress[i] + searchBar.value.slice(2);
            window.open(url, '_self')
            break
        } else{
            let url = defaultEngine + searchBar.value;
            window.open(url, '_self')
        }
        i++
    }
}

// Pesquisa
export function searchFunction(event){
    if (event.key === 'Enter') {
        if(searchBar.value != ''){
            if (searchBar.value[1] ===' ' ) {
                searchHotKey(searchBar.value[0])
            } else{
                let url = defaultEngine + searchBar.value;
                window.open(url, '_self')
            }
            
        }   
    }
}
