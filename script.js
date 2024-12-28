function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Clear previous error message
    errorMessage.innerHTML = "";

    // Basic validation for empty fields
    if (username == "" || password == "") {
        errorMessage.innerHTML = "Please fill in both fields.";
        return false;
    }

    // Further validation can be added here (e.g., check if username and password match specific criteria)
    // For example, we can check if the password length is at least 6 characters.
    if (password.length < 6) {
        errorMessage.innerHTML = "Password must be at least 6 characters long.";
        return false;
    }

    // If validation passes, form can be submitted (for now it does nothing).
    alert("Login successful");
    return true;
}
