
  document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('login-button');

    loginButton.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the form submission

      // Redirect to the dashboard page
      window.location.href = 'dashboard.html';
    });
  });

