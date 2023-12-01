const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const selectedResidency = document.querySelector('input[name="residency"]:checked');

  if (selectedResidency) {
    const residencyStatus = selectedResidency.value;

    if (residencyStatus === 'resident') {
      window.location.href = 'login_existing.html';
    } else if (residencyStatus === 'non-resident') {
      window.location.href = 'create_account.html';
    }

    // Pass residencyStatus to the login function
    login(residencyStatus);
  } else {
    // Handle the case where no radio button is selected
    alert('Please select a residency status');
  }
});

let attempts = 0;

function login(residencyStatus) {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "Neil" && password === "1234") {
    // Login successful
    if (residencyStatus === 'resident') {
      window.location.href = 'residentuser.html';
    } else if (residencyStatus === 'non-resident') {
      window.location.href = 'nonresidentuser.html';
    }
  } else {
    // Increment the number of attempts
    attempts++;

    // Check if the user has exceeded the maximum number of attempts
    if (attempts >= 3 && attempts <= 5) {
      // Redirect to the session expired page
      window.location.href = 'session-expired.html';
    } else if (attempts > 5) {
      // Redirect to the create account page
      window.location.href = 'create-account.html';
    } else {
      // Show error message
      alert('Invalid username or password.');
    }
  }
}
