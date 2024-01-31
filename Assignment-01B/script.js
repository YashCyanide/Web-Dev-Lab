// Function to switch between login and register forms
function switchForm(formId) {
    document.getElementById('loginForm').style.display = formId === 'loginForm' ? 'block' : 'none';
    document.getElementById('registerForm').style.display = formId === 'registerForm' ? 'block' : 'none';
}

// Function to validate login fields
function validateLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simple email and password validation
    if (email.trim() === '' || password.trim() === '') {
        alert('Email and password are required.');
        return;
    }

    // Redirect to another page or perform further actions
    alert('Login successful! Redirecting...');
}

// Function to validate register fields
function validateRegister() {
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Simple username, email, and password validation
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('All fields are required.');
        return;
    }

    // Password length validation
    if (password.length < 10) {
        alert('Password must be at least 10 characters long.');
        return;
    }

    // Redirect to another page or perform further actions
    alert('Registration successful! Redirecting...');
}

// Function to validate register fields
function validateRegister() {
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    // Simple username, email, and password validation
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('All fields are required.');
        return;
    }

    // Email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email address.');
        return;
    }

    // Password length validation
    if (password.length < 10) {
        alert('Password must be at least 10 characters long.');
        return;
    }

    // Redirect to another page or perform further actions
    alert('Registration successful! Redirecting...');
}
