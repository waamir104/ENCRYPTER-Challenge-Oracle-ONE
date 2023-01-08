//                   Encrypter       version--  1.0
// William S. Peña [waamirdev@gmail.com] 23rd December, 2022 

document.getElementById("encrypt__btn").addEventListener("click", encrypt);
document.getElementById("decrypt__btn").addEventListener("click", decrypt);
document.getElementById("copy__btn").addEventListener("click", copy__output__text);
window.addEventListener("resize", resize__output__container);
window.addEventListener("resize", resize__main);

const textarea__input = document.querySelector(".text__input");
var textarea__output = document.querySelector(".text__output");

var output__text__container = document.querySelector(".output__text__container");
var no__output__text__container = document.querySelector(".no__output__text__container");
var output__container = document.querySelector(".output__container");
var matrix__container = document.querySelector(".matrix__container");
var main = document.querySelector('main');

// Get the display value of the output__text__container
var style = window.getComputedStyle(output__text__container);
var display;

function resize__main() {
    if ((window.innerWidth < 376) && (display == 'block')) {
        main.style.height = "900px"
    } else if ((window.innerWidth < 769) && (display == 'block')) {
        main.style.height = "1170px"
    } else if ((window.innerWidth > 768) && (display == 'block')) {
        main.style.height = "";
    }
}

function show__output__text() {
    if ( (window.innerWidth <= 768)) {
        output__container.style.height = "343px";
    }
    resize__canvas();
    no__output__text__container.style.display = "none";
    no__output__text__container.style.opacity = "0";
    output__text__container.style.display = "block";
    output__text__container.style.opacity = "1";
    matrix__container.style.display = "block";
    matrix__container.style.opacity = "1";
    
    display = style.getPropertyValue('display'); 
    resize__main();
}

function validate__message() {
    if (textarea__input.value.length < 1) {
        return false;
    } else {
        return true; 
    }
}

function encrypt() {;
    if (validate__message()) {
        let message = textarea__input.value;

        let encrypted__message = message
        .replaceAll("e","enter")
        .replaceAll("i","imes")
        .replaceAll("a","ai")
        .replaceAll("o","ober")
        .replaceAll("u","ufat");

        textarea__input.value = ""
        textarea__output.value = encrypted__message;

        show__output__text(); 
    }
}

function decrypt() {
    if (validate__message()) {
        let encrypted__message = textarea__input.value;

        let message = encrypted__message
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

        textarea__input.value = "";
        textarea__output.value = message;

        show__output__text();    
    }
}

function copy__output__text() {
    let copyText = textarea__output;
    copyText.select();
    document.execCommand("copy");
}


function resize__output__container() {
    if ((window.innerWidth <= 768) && (output__text__container.clientHeight != 0)) {
        output__container.style.height = "343px";
    }

    if ((window.innerWidth > 768) && (output__text__container.clientHeight != 0)) {
        output__container.style.height = "944px";
    }
}



