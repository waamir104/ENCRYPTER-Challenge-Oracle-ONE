//             Encrypter   --version  2.3
// William S. Peña [waamirdev@gmail.com] 14th January, 2023

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