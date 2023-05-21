// Get the sign up submit button element
const signUpBtn = document.querySelectorAll('.btn')[1];

// Add an event listener to the sign up submit button
signUpBtn.addEventListener('click', function(event) {
  event.preventDefault();

  // Get the email, password, and name input values
  const email = document.getElementById('logemail1').value;
  const password = document.getElementById('logpass1').value;
  const name = document.getElementById('logname1').value;

  // Store the email, password, and name in the local storage
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);
  localStorage.setItem('name', name);
});

