const emailField = document.getElementById('user-email');
const passwordField = document.getElementById('user-pass');
// const loginSuccess = document.getElementById('login-a');

document.getElementById('login-btn').addEventListener('click', function () {
    const email = emailField.value;
    const password = passwordField.value;

    if (email === 'info@admin.com' && password === '1234567890') {
        // loginSuccess.setAttribute('href', 'pages/dashboard.html')
        window.location.href = 'pages/dashboard.html';
    } else {
        alert('login failed!');
    }

})