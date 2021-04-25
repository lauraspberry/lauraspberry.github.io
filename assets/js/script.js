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
            // css fade out - class for hiding / fading
            document.getElementById("sequenceA").innerHTML = introid[i];
            let currWord = identity[i];
            // for (let l = 0; l < currWord.length + 1; l++) {
            //     let tempString = currWord.substring(0, l);
            //     sleep(100);
            //     console.log(tempString);
            //     document.getElementById("sequence").innerHTML = tempString;
                
            //     // wait 
            // }
            document.getElementById("sequence").innerHTML = identity[i];
            // add css class
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

let e = document.getElementsByClassName("lightbox");

function closeModal() {
    e.classList.add("hidden");
}

e.onclick = closeModal;


function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

  function type() {
    document.getElementById("sequenceA").innerHTML = introid[i];
    let currWord = identity[i];
    for (let l = 0; l < currWord.length + 1; l++) {
        let tempString = currWord.substring(0, l);
        sleep(100);
        console.log(tempString);
        document.getElementById("sequence").innerHTML = tempString;
        
        // wait 
    }
  }