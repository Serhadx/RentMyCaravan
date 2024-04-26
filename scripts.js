document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const registered = urlParams.get('registered'); // Assumes the URL might have '?registered=true'

    if (registered) {
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = 'You have now registered an account and can add a caravan.';
        messageDiv.style.color = 'green'; // Style as needed
    }
});