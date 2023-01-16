//             Encrypter   --version  2.3
// William S. Peña [waamirdev@gmail.com] 14th January, 2023


// Message Copied Alert

function copy__btn__alert() {
    Swal.fire({
        width: '50%',
        icon: 'success',
        title: 'Message Copied',
        showConfirmButton: false,
        timer: 2000,
        backdrop: true,
        timerProgressBar: true,
        position: 'center',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeyDownPropagation: false,
        padding: '0 0 3em 0'
    });
}

// Special Characters Alert

function validate__special__characters() {
    Swal.fire({
        width: '50%',
        icon: 'error',
        title: 'Special characters are NOT allow',
        text : '~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù',
        showConfirmButton: false,
        backdrop: true,
        position: 'center',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeyDownPropagation: false,
        padding: '0 0 3em 0',
        showCloseButton: true,
        closeButtonAriaLabel: 'Close Alert'
      })
  }
  