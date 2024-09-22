const themeSelector = document.querySelector('#theme-selector');

function changeTheme() {
    if (themeSelector.value === 'dark') {
        document.body.classList.add('dark');
        document.getElementById('logo').src = 'images/byui-logo_white.png'; 
    } else {
        document.body.classList.remove('dark');
        document.getElementById('logo').src = "images/byui-logo_blue.webp"; 
    }
}

themeSelector.addEventListener('change', changeTheme);