
function validarFormulario(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;

    
    if (nombre && telefono && correo && mensaje) {
        alert(`Apreciado(a) ${nombre}, hemos recibido su mensaje. Nos comunicaremos al teléfono ${telefono} o dirección de email ${correo} en los próximos días.`);
        
        document.getElementById('miFormulario').reset();
    } else {
        alert('Por favor complete todos los campos del formulario.');
    }
}

// Obtener el formulario y agregar el evento de envío
const form = document.getElementById('miFormulario');
form.addEventListener('submit', validarFormulario);
