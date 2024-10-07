// search
import * as search from './modules/search.js';

var searchBar = document.getElementById('search');

searchBar.addEventListener('keydown', search.searchFunction)