function bienvenida() {
  alert("¡Bienvenido a mi CV en línea!");
}

function validarFormulario() {
  let nombre = document.getElementById('nombre').value;
  let email = document.getElementById('email').value;
  if (!nombre || !email.includes('@')) {
    alert("Por favor, introduce un nombre válido y un email correcto.");
    return false;
  }
  // Aquí podrías agregar más validaciones si es necesario
  // Si todo está bien, puedes enviar el formulario

  alert("Formulario enviado correctamente.");
  return true;
}

function toggleHabilidades() {
  const habilidades = document.getElementById('habilidades');
  habilidades.style.display = (habilidades.style.display === 'none') ? 'block' : 'none';
}
