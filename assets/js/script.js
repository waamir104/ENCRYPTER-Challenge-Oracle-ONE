//             Encrypter   --version  2.2
// William S. Peña [waamirdev@gmail.com] 12th January, 2023

// Event Listeners 
document.getElementById('encrypt__btn').addEventListener('click', encrypt);
document.getElementById('decrypt__btn').addEventListener('click', decrypt);
document.getElementById('copy__btn').addEventListener('click', copy__output__text);
document.getElementById('textarea__input').addEventListener('input', adjust__textarea__input);

window.addEventListener('resize', adjust__textarea__output);
window.addEventListener('resize', adjust__output__container);
window.addEventListener('resize', adjust__textarea__input__resizing);



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
var text = '';

// Functions

// Adjust input__textarea__container
function adjust__textarea__input() {
    if (window.innerWidth < 451) {
        if (textarea__input.value > text) {
            text = textarea__input.value;
            grow__textarea__input();
        } else if (textarea__input.value < text) {        
            text = textarea__input.value;
            reduce__textarea__input();
        }
    }
}

// Grows the textarea__input

function grow__textarea__input() {
    if (textarea__input.scrollHeight > input__textarea__container.offsetHeight) {
        input__textarea__container.style.height = textarea__input.scrollHeight + 'px';
    }
}

// Reduces the textarea__input

function reduce__textarea__input() {
    let textarea__input__lineHeight = parseFloat(getComputedStyle(textarea__input).lineHeight);

    input__textarea__container.style.height = (input__textarea__container.offsetHeight - textarea__input__lineHeight) + 'px';
    input__textarea__container.style.height = textarea__input.scrollHeight + 'px';
}

// Adjsut textarea__input when resizing

function adjust__textarea__input__resizing() {
    if (window.innerWidth < 451) {
        input__textarea__container.style.height = parseFloat(getComputedStyle(input__textarea__container).minHeight) + 'px';

        grow__textarea__input();
    }
}

// Validates the textarea__input value

function validate__message() {
    let textarea__input__value = textarea__input.value;
    let textarea__input__trimmed__value = textarea__input__value.trim();

    textarea__input.value = textarea__input__trimmed__value;

    if (textarea__input__trimmed__value < 1) {
        dont__show__output__container();
        adjust__output__container();
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
    adjust__textarea__output();
    adjust__output__container();
    resize__canvas(); // matrix__script.js function
}

// Do not show the output__text__container

function dont__show__output__container() {
    no__output__text__container.style.display = 'block';
    no__output__text__container.style.opacity = '1';
    output__text__container.style.display = 'none';
    output__text__container.style.opacity = '0';
    matrix__container.style.display = 'none';
    matrix__container.style.opacity = '0';
}

// Encrypts the inserted value

function encrypt() {
    if (validate__message()) {
        let message = textarea__input.value.toLowerCase();

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
    
    set__textarea__input__default__values();
}

// Decrypts the inserted value

function decrypt() {
    if (validate__message()) {
        let message = textarea__input.value.toLowerCase();

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

    set__textarea__input__default__values();
}

// Sets default values after clicking any action button

function set__textarea__input__default__values() {
    // Set the textarea input value to 0 characters
    textarea__input.value = '';

    // Change the height value of the textarea__input according to the window width
    if (window.innerWidth < 380) {
        input__textarea__container.style.height = '300px';
    } else if (window.innerWidth > 379 && window.innerWidth < 451) {
        input__textarea__container.style.height = '387px'
    } 
}

// Let the user copy the output message 

function copy__output__text() {
    let copy__text__value = textarea__output.value;
    navigator.clipboard.writeText(copy__text__value);
}

// Adjust output__container height

function adjust__output__container() {
        let output__text__container__display = getComputedStyle(output__text__container).display;
        let no__output__text__container__display = getComputedStyle(no__output__text__container).display;

        if (output__text__container__display == 'block') {
            let output__text__container__final__height = parseFloat(getComputedStyle(output__text__container).height) + 'px';

            output__container.style.height = output__text__container__final__height;
        } else if (no__output__text__container__display == 'block') {
            if (window.innerWidth > 900) {
                let final__height = parseFloat(getComputedStyle(no__output__text__container).height) + 'px';
                output__container.style.height = final__height;
            } else if (window.innerWidth < 901 && window.innerWidth > 554) {
                output__container.style.height = '133px'
            } else if (window.innerWidth < 555) {
                let final__height = parseFloat(getComputedStyle(no__output__text__container).height) + 'px';
                output__container.style.height = final__height;
            }
        }
}

// Adjust output__textarea__container

function adjust__textarea__output() {
    let output__text__container__display = getComputedStyle(output__text__container).display;
    set__default__height__value__textarea__output();

    if (output__text__container__display == 'block') {
        if (window.innerWidth > 900) {
            output__textarea__container.style.height = '781px';
        } else if (window.innerWidth < 901) {
            let final__height = textarea__output.scrollHeight;

            output__textarea__container.style.height = final__height + 'px';
        }
    }
}

// Sets the default height value the textarea__output

function set__default__height__value__textarea__output() {
    let output__textarea__container__minHeight = parseFloat(getComputedStyle(output__textarea__container).minHeight);

    output__textarea__container.style.height = output__textarea__container__minHeight + 'px';
}
