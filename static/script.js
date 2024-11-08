document.querySelector("form").addEventListener("submit", function(event) {
    const registerUsername = document.getElementById("register-username");
    const registerEmail = document.getElementById("register-email")
    const registerPass = document.getElementById("register-password");
    const confirmRegisterPass = document.getElementById("confirm-register-password")
    const errorMsg = document.getElementById("register-error")

    // Function for checking if username is valid
    const usernameIsValid = (username) => {
        return /^[^\s]+$/.test(username);
    };
    
    // Function for checking if email address is valid
    const emailIsValid = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    // Function for checking if password is valid, conatining
    // 8+ characters with 1 uppercase, 1 lowercase, 1 number, and 1 special character
    const passwordIsValid = (password) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);
    };

    // Clear previous error message
    errorMsg.innerHTML = "";

    // Prevent submission if there are validation errors
    let validationError = false;

    if (registerUsername.value === "") {
        errorMsg.innerHTML = "Please choose a Username";
        validationError = true;
    }
    else if (!usernameIsValid(registerUsername.value)) {
        errorMsg.innerHTML = "Username must not contain spaces";
        validationError = true;
    }
    else if (!emailIsValid(registerEmail.value)) {
        errorMsg.innerHTML = "Please enter a valid email address";
        validationError = true;
    }
    else if (!passwordIsValid(registerPass.value)) {
        errorMsg.innerHTML = "Password must be 8+ characters with 1 uppercase, 1 lowercase, 1 number, and 1 special character";
        validationError = true;
    }
    else if (confirmRegisterPass.value != registerPass.value) {
        errorMsg.innerHTML = "Passwords do not match";
        validationError = true;
    }

    // Prevent form submission if there were any validation errors
    if (validationError) {
        event.preventDefault();
    }
});
