/* Validacion de Formulario de Inscripcion */
const form = document.querySelector('form[name="frm"]');
form.addEventListener('submit', (event) => {
    const fname = form.elements['fname'].value;
    const flastname = form.elements['flastname'].value;
    const fsex = form.elements['fsex'].value;
    const femail = form.elements['femail'].value;
    const fphone = form.elements['fphone'].value;
    const fcourse = form.elements['fcourse'].value;

    if (!fname || !flastname || !femail || !fphone) {
        event.preventDefault();
        alert('Por favor, complete los datos del formulario');
    } else if (!ValidateEmail(femail)) {
        event.preventDefault();
        alert('Por favor, ingrese un email valido');
    }
});

// Crear la función que valide el email (!ValidateEmail)
function ValidateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
