document.getElementById("signup-form")?.addEventListener("submit", function (e) {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("error-message");
  
    if (password !== confirmPassword) {
      e.preventDefault();
      errorMessage.textContent = "Passwords do not match!";
    } else {
      errorMessage.textContent = "";
    }
  });
  
  // Log In functionality placeholder
  document.getElementById("login-form")?.addEventListener("submit", function (e) {
    alert("Log In functionality will be implemented later.");
  });