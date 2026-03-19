// Add event listener to the 'Sign In' button to redirect to login.html
window.addEventListener('DOMContentLoaded', function() {
    // Find all buttons with span.truncate and text 'Sign In'
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        const span = btn.querySelector('span.truncate');
        if (span && span.textContent.trim() === 'Sign In') {
            btn.addEventListener('click', function() {
                window.location.href = '/pages/login.html';
            });
        }
    });
});
