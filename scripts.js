document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var errorMessage = document.getElementById('error-message');
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        errorMessage.style.display = 'none';
        alert('Thank you! You have been subscribed.');
    } else {
        errorMessage.style.display = 'block';
    }
});
