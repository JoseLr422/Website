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
        } else {
            event.preventDefault();
            alert('¡Gracias por unirte a MindWell!');
            
        }
    });

    function ValidateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }
});
