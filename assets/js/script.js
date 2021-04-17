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