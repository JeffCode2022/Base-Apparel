document.getElementById('submit-btn').addEventListener('click', function(event) {
  event.preventDefault(); // Evita el envío del formulario

  // Obtener elementos del DOM
  const emailInput = document.getElementById('email');
  const errorIcon = document.getElementById('error-icon');
  const errorMessage = document.getElementById('error-message');
  const successModal = document.getElementById('success-modal');
  const email = emailInput.value.trim(); // Obtener y limpiar el valor del input

  // Validar el correo electrónico
  if (!validateEmail(email)) {
      // Si el correo no es válido, mostrar el ícono de error y el mensaje
      errorIcon.style.display = 'block';
      errorMessage.textContent = 'Please provide a valid email';
      errorMessage.style.display = 'block';
      emailInput.style.borderColor = 'var(--soft-red)'; // Cambiar el borde a rojo
  } else {
      // Si el correo es válido, ocultar el ícono y el mensaje de error
      errorIcon.style.display = 'none';
      errorMessage.style.display = 'none';
      emailInput.style.borderColor = 'var(--desaturated-red)'; // Restaurar el borde

      // Mostrar el modal de éxito
      successModal.style.display = 'block';

      // Limpiar el campo y ocultar el modal después de 3 segundos
      setTimeout(function() {
          emailInput.value = ''; // Limpiar el campo de entrada
          successModal.style.display = 'none'; // Ocultar el modal
      }, 3000); // 3000 milisegundos = 3 segundos
  }
});

// Función para validar el correo electrónico
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar correos
  return re.test(String(email).toLowerCase()); // Retorna true si el correo es válido
}