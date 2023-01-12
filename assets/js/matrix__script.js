//             Encrypter   --version  2.2
// William S. Peña [waamirdev@gmail.com] 12th January, 2023
window.addEventListener("resize", resize__canvas);
// Get the canvas node and the drawing context
const canvas = document.getElementById('matrix__effect');
const pencil = canvas.getContext('2d');

var width = 0;
var height = 0;

resize__canvas();

// draw rectangle of width and height same as that of the canvas
pencil.fillStyle = '#FFFFFF';
pencil.fillRect(0, 0, width, height);

const cols = Math.floor(width / 20) + 1;
const ypos = Array(cols).fill(0);

function matrix () {
  // Draw a semitransparent black rectangle on top of previous drawing
  pencil.fillStyle = '#FFF1';
  pencil.fillRect(0, 0, width, height);

  // Set color to green and font to 15pt monospace in the drawing context
  pencil.fillStyle = '#F00';
  pencil.font = '15pt monospace';

  // for each column put a random character at the end
  ypos.forEach((y, ind) => {
    // generate a random character
    const text = String.fromCharCode(Math.random() * 128);

    // x coordinate of the column, y coordinate is already given
    const x = ind * 20;
    // render the character at (x, y)
    pencil.fillText(text, x, y);

    // randomly reset the end of the column if it's at least 100px high
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    // otherwise just move the y coordinate for the column 20px down,
    else ypos[ind] = y + 20;
  });
  
}

setInterval(matrix, 55);

// Function to resize the canvas

function resize__canvas() {
    canvas.width = output__container.offsetWidth;
    width = canvas.width * 5;
    height = canvas.height = output__container.offsetHeight;

    let output__textarea__container__height = parseFloat(getComputedStyle(output__textarea__container).height);
    let output__textarea__container__minHeight = parseFloat(getComputedStyle(output__textarea__container).minHeight);
    let output__text__container__height = output__text__container.offsetHeight;

    matrix__container.style.top = '-' + output__text__container__height + 'px';
}

// Lines to hide the matrix canvas

var matrix__container__opacity = 1;
var continue__minimizing__opacity = true;

function minimize__opacity() {
    if (continue__minimizing__opacity) {
        if (matrix__container__opacity < 0) {
            matrix__container.style.display = 'none';
            continue__minimizing__opacity = false;
        } else {
            matrix__container.style.opacity = matrix__container__opacity;
            matrix__container__opacity -= 0.1;
        }
    }
}

function dont__show__matrix() {
    if (continue__minimizing__opacity) {
        setInterval(minimize__opacity, 100);
    }
    matrix__container__opacity = 1;
    continue__minimizing__opacity = true;
}

matrix__container.onmouseover = dont__show__matrix;