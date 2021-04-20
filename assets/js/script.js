// let theme = "dark";
let theme = localStorage.getItem('theme');
console.log(theme);

window.onload = function() {
    if (theme === null) {
        theme = 'light';
        localStorage.setItem('theme', theme)
    }

    document.body.className = `theme-${theme}`;
    // document.getElementById('switch').checked = (theme === 'light');
    setIcon();
}

function changeTheme() {
    if (theme === 'dark') {
        theme = 'light';
    } else {
        theme = 'dark';
    }
    console.log(`changed to ${theme}`);
    setIcon();
    document.body.className = `theme-${theme}`;
    localStorage.setItem('theme', theme)
}

function setIcon() {
    if (theme == "dark") {
        document.getElementById("sun").classList.remove("hidden");
        document.getElementById("moon").classList.add("hidden");
    } else {

        document.getElementById("sun").classList.add("hidden");
        document.getElementById("moon").classList.remove("hidden");
    }
}

// source: https://stackoverflow.com/questions/44169668/how-to-loop-changing-text-in-html-javascript
var introid = ['a', 'an', 'a', 'a', 'an', 'a'];
var identity = ['programmer', 'artist', 'problem solver', 'minecraft enthusiast', 'egg tart fanatic', 'student'];

textSequence(0);
function textSequence(i) {

    if (identity.length > i) {
        setTimeout(function() {
            document.getElementById("sequenceA").innerHTML = introid[i];
            document.getElementById("sequence").innerHTML = identity[i];
            textSequence(++i);
        }, 2000); // 2 seconds (in milliseconds)

    } else if (identity.length == i) { // Loop
        textSequence(0);
    }

}


// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('#timelineModal1');
//     var instances = M.Modal.init(elems, options);
// });