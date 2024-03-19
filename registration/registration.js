const registerForm = document.getElementById('register-form');
const trainerIdInput = document.getElementById('trainer-id');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const ignInput = document.getElementById('ign');
const errorDisplay = document.createElement('p'); // Create element for error messages

function generateTrainerId() {
  let trainerId = '';
  for (let i = 0; i < 4; i++) {
    trainerId += Math.floor(Math.random() * 10000).toString().padStart(4, '0') + ' ';
  }
  trainerIdInput.value = trainerId.trim();
}

generateTrainerId(); 

function showError(message) {
  errorDisplay.textContent = message;
  errorDisplay.style.color = 'red'; // Set error message color to red
  registerForm.insertBefore(errorDisplay, registerForm.firstChild); // Insert error message at the top of the form
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  // Implement your desired password complexity rules here (e.g., minimum length, character types)
  return password.length >= 8; // Example: password must be at least 8 characters long
}

registerForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  let errorMessage = '';

  // Check email validity
  if (!validateEmail(emailInput.value)) {
    errorMessage = 'Please enter a valid email address.';
  } else if (!validatePassword(passwordInput.value)) {
    errorMessage = 'Password must be at least 8 characters long.'; // Update based on your password complexity rules
    passwordInput.style.borderColor = 'red'; // Set password input border color to red for visual cue
  } else if (passwordInput.value !== confirmPasswordInput.value) {
    errorMessage = 'Passwords do not match.';
  } else if (!ignInput.value) {
    errorMessage = 'Please enter your in-game name (IGN).';
  }

  if (errorMessage) {
    showError(errorMessage);
  } else {
    alert('Registration successful!'); 
  }
});