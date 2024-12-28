function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var errorMessage = document.getElementById("error-message");

    // Clear previous error message
    errorMessage.innerHTML = "";

    // Check if any field is empty
    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        errorMessage.innerHTML = "Please fill in all fields.";
        return false;
    }

    // Validate email format (simple regex)
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        errorMessage.innerHTML = "Please enter a valid email address.";
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        errorMessage.innerHTML = "Passwords do not match.";
        return false;
    }

    // Check if password is at least 6 characters long
    if (password.length < 6) {
        errorMessage.innerHTML = "Password must be at least 6 characters long.";
        return false;
    }

    // Create a new user object
    var newUser = {
        username: username,
        email: email,
        password: password
    };

    // Retrieve existing users from localStorage, or initialize an empty array
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the username or email already exists
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
            errorMessage.innerHTML = "Username already taken!";
            return false;
        }
        if (users[i].email === email) {
            errorMessage.innerHTML = "Email already registered!";
            return false;
        }
    }

    // Add the new user to the users array
    users.push(newUser);

    // Save the updated users array back to localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Display success message
    alert("Registration Successful");

    // Optionally, redirect to a login page or clear the form
    // window.location.href = "login.html"; // Uncomment to redirect
    // document.getElementById("registerForm").reset(); // Uncomment to clear the form

    return true;
}
