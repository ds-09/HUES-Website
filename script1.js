document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    confirmPassword.addEventListener('blur', function(event) {
        if (password.value !== confirmPassword.value) {
            alert('Passwords do not match');
            event.preventDefault();
        }
    });
});

