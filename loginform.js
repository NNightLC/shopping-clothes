// Get the sign up submit button element
const signUpBtn = document.querySelectorAll('.btn')[1];

// Add an event listener to the sign up submit button
signUpBtn.addEventListener('click', function(event) {
  event.preventDefault();

  // Generate a unique identifier for each submission
  const submissionId = Date.now(); // Using timestamp as an example, you can choose a different method if desired

  // Get the email, password, and name input values
  const email = document.getElementById('signEmail').value;
  const password = document.getElementById('signPass').value;
  const name = document.getElementById('signName').value;

  // Store the email, password, and name in the local storage with the unique identifier
  localStorage.setItem(`email_${submissionId}`, email);
  localStorage.setItem(`password_${submissionId}`, password);
  localStorage.setItem(`name_${submissionId}`, name);
});

// Get the login submit button element
const loginBtn = document.querySelector('.card-front .btn');

// Add an event listener to the login submit button
loginBtn.addEventListener('click', function(event) {
  event.preventDefault();

  // Get the email and password input values for login
  const loginEmail = document.getElementById('logEmail').value;
  const loginPassword = document.getElementById('logPass').value;

  // Get all sign-up items from local storage
  const signUpItems = Object.entries(localStorage);

  // Initialize a flag to track successful login
  let isLoggedIn = false;

  // Iterate over each sign-up item
  for (const [key, value] of signUpItems) {
    // Check if the key represents an email item
    if (key.startsWith('email_')) {
      // Extract the corresponding password and name keys
      const submissionId = key.replace('email_', '');
      const passwordKey = `password_${submissionId}`;
      const nameKey = `name_${submissionId}`;

      // Retrieve the password and name values for the current email
      const signUpPassword = localStorage.getItem(passwordKey);
      const signUpName = localStorage.getItem(nameKey);

      // Check if the login credentials match the current sign-up values
      if (loginEmail === value && loginPassword === signUpPassword) {
        // Display a success message
        alert(`Login Successful! Welcome, ${signUpName}`);
        isLoggedIn = true;
        window.location.href = 'index.html';
        break;
      }
    }
  }

  // If no successful login occurred, display a failure message
  if (!isLoggedIn) {
    alert('Login Failed! Invalid email or password.');
  }
});
