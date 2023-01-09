//             Encrypter   --version  2.0
// William S. Peña [waamirdev@gmail.com] 2nd January, 2023

// Event Listeners 
document.getElementById('encrypt__btn').addEventListener('click', encrypt);
document.getElementById('decrypt__btn').addEventListener('click', decrypt);
document.getElementById('copy__btn').addEventListener('click', copy__output__text);

window.addEventListener('resize', adjust__output__container);


// Declaration of variables
const input__textarea__container = document.getElementById('input__textarea__container');
const textarea__input = document.getElementById('textarea__input');
const textarea__output = document.getElementById('textarea__output');
const no__output__text__container = document.getElementById('no__output__text__container');
const output__text__container = document.getElementById('output__text__container');
const matrix__container = document.getElementById('matrix__container');
const output__container = document.getElementById('output__container');
const output__textarea__container = document.getElementById('output__textarea__container');

var input__textarea__message = '';

// Functions

// Validates the textarea__input value
function validate__message() {
    let textarea__input__value = textarea__input.value;
    let textarea__input__trimmed__value = textarea__input__value.trim();

    textarea__input.value = textarea__input__trimmed__value;

    if (textarea__input__trimmed__value < 1) {
        return false;
    } else {
        return true;
    }
}

// Shows the output__text__container

function show__output__text__container() {
    no__output__text__container.style.display = 'none';
    no__output__text__container.style.opacity = '0';
    output__text__container.style.display = 'block';
    output__text__container.style.opacity = '1';
    matrix__container.style.display = 'block';
    matrix__container.style.opacity = '1';

    // Calls Functions
    adjust__output__container();
    resize__canvas(); // matrix__script.js function
}

// Encrypts the inserted value

function encrypt() {
    if (validate__message()) {
        let message = textarea__input.value;

        // Changes the vowels in the message
        let encrypted__message = message
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('a', 'ai')
        .replaceAll('o', 'ober')
        .replaceAll('u', 'ufat');

        textarea__output.value = encrypted__message;
        
        // Calls Functions
        show__output__text__container();
    }
    
    textarea__input.value = '';

}

// Decrypts the inserted value

function decrypt() {
    if (validate__message()) {
        let message = textarea__input.value;

        // Changes the encrypted characters
        let decrypted__message = message
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ai', 'a')
        .replaceAll('ober', 'o')
        .replaceAll('ufat', 'u');

        textarea__output.value = decrypted__message;

        // Calls Functions
        show__output__text__container();
    }

    textarea__input.value = '';


}

// Let the user copy the output message 

function copy__output__text() {
    let copy__text = textarea__output;
    copy__text.select();
    document.execCommand('copy');
}

// Adjust output__container height

function adjust__output__container() {
        let output__text__container__display = getComputedStyle(output__text__container).display;

        if (output__text__container__display == 'block') {
            let output__text__container__final__height = parseFloat(getComputedStyle(output__text__container).height) + 'px';

            output__container.style.height = output__text__container__final__height;
        }
}
