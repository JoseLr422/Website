// scripts.js

// Añadir funcionalidad de clic al botón "Join NOW"
document.querySelector('.join-now').addEventListener('click', function() {
    alert('¡Gracias por unirte a MindWell!');
});

// Puedes añadir más lógica para otras interacciones en la página aquí

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form[name="frm"]');
    form.addEventListener('submit', (event) => {
        const fname = form.elements['fname'].value;
        const flastname = form.elements['flastname'].value;
        const femail = form.elements['femail'].value;
        const fphone = form.elements['fphone'].value;


        if (!fname || !flastname || !femail || !fphone) {
            event.preventDefault();
            alert('Por favor, complete los datos del formulario');
        } else if (!ValidateEmail(femail)) {
            event.preventDefault();
            alert('Por favor, ingrese un email válido');
        }
    });

    function ValidateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});
