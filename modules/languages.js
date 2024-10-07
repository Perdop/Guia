// Search bar texts
var searchBar = document.getElementById('search');
var searchAriaLabel = 'Search or type a URL';
var searchPlaceHolder = 'Search or type a URL'; 
var searchName = 'Search Bar';

searchBar.setAttribute('placeholder', `${searchPlaceHolder}`);
searchBar.setAttribute('aria-label', `${searchAriaLabel}`); 
searchBar.setAttribute('name', `${searchName}`);

// Main texts
    

// Nav bar texts
var settingBtn = document.getElementById('settingBtn');
var settingName = 'Settings';
var settingAriaLabel = 'Settings';

settingBtn.setAttribute('name', `${settingName}`);
settingBtn.setAttribute('aria-label', `${settingAriaLabel}`); 

var newBtn = document.getElementById('newBtn') ;
var newBtnName = 'New shortcut';
var newBtnAriaLabel = 'New shortcut';

newBtn.setAttribute('name', `${newBtnName}`);
newBtn.setAttribute('aria-label', `${newBtnAriaLabel}`); 

// Settings.html 
document.title = 'Guia - Settings'