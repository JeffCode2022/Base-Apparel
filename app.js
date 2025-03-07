document.getElementById('submit-btn').addEventListener('click', function(event) {
  event.preventDefault(); // Evita el envío del formulario
  const emailInput = document.getElementById('email');
  const errorIcon = document.getElementById('error-icon');
  const errorMessage = document.getElementById('error-message');
  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
      errorIcon.style.display = 'block';
      errorMessage.textContent = 'Please provide a valid email';
      errorMessage.style.display = 'block';
      emailInput.style.borderColor = 'var(--soft-red)';
  } else {
      errorIcon.style.display = 'none';
      errorMessage.style.display = 'none';
      emailInput.style.borderColor = 'var(--desaturated-red)';
      alert('Email is valid!'); // Aquí puedes enviar el formulario o realizar otra acción
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}