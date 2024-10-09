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

// Footer
var newShortcut = document.getElementById('newShortcut');
var newShortcutName = 'New Shortcut';
var newShortcutAriaLabel = 'New Shortcut';
var newShortcutTxt = 'New Shortcut'

newShortcut.setAttribute('name', `${newShortcutName}`);
newShortcut.setAttribute('aria-label', `${newShortcutAriaLabel}`); 
newShortcut.innerHTML = newShortcutTxt;

var newFolder = document.getElementById('newFolder');
var newFolderName = 'New Folder';
var newFolderAriaLabel = 'New Folder';
var newFolderTxt = 'New Folder'

newFolder.setAttribute('name', `${newFolderName}`);
newFolder.setAttribute('aria-label', `${newFolderAriaLabel}`); 
newFolder.innerHTML = newFolderTxt;

var manageGroup = document.getElementById('manageGroup');
var manageGroupName = 'Manage groups';
var manageGroupAriaLabel = 'Manage groups';
var manageGroupTxt = 'Manage groups'

manageGroup.setAttribute('name', `${manageGroupName}`);
manageGroup.setAttribute('aria-label', `${manageGroupAriaLabel}`); 
manageGroup.innerHTML = manageGroupTxt;
