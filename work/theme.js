let theme = localStorage.getItem('theme');
// let theme = 'dark';

window.onload = function() {
    if (theme === null) {
        theme = 'dark';
        localStorage.setItem('theme', theme)
    }

    document.body.className = `theme-${theme}`;
    document.getElementById('switch').checked = (theme === 'light');
}


console.log(theme);

function changeTheme() {
    if (theme === 'dark') {
        theme = 'light';
    } else {
        theme = 'dark';
    }

    document.body.className = `theme-${theme}`;
    localStorage.setItem('theme', theme)
}












// var checkbox = document.querySelector('input[name=theme]');
//
// checkbox.addEventListener('change', function() {
//     if(this.checked) {
//         trans()
//         document.documentElement.setAttribute('data-theme', 'dark')
//     } else {
//         trans()
//         document.documentElement.setAttribute('data-theme', 'light')
//     }
// })
//
// console.log('theme');
//
// let trans = () => {
//     document.documentElement.classList.add('transition');
//     window.setTimeout(() => {
//         document.documentElement.classList.remove('transition')
//     }, 1000)
// }