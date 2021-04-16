let theme = "dark";

function changeTheme() {
    if (theme === 'dark') {
        theme = 'light';
    } else {
        theme = 'dark';
    }
    console.log(`changed to ${theme}`);
    document.body.className = `theme-${theme}`;
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('#timelineModal1');
    var instances = M.Modal.init(elems, options);
});