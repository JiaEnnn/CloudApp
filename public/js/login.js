// Redirects for Sign Up tab and Sign Up now link
window.addEventListener('DOMContentLoaded', function() {
    // Sign Up tab (menu)
    const tabLinks = document.querySelectorAll('a');
    tabLinks.forEach(link => {
        if (link.textContent.trim() === 'Sign Up') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'register.html';
            });
        }
    });

    // Sign Up now link in footer (handle all possible matches)
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        if (link.textContent.trim().toLowerCase().replace(/\s+/g, '') === 'signupnow') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'register.html';
            });
        }
    });

    // Cross icon (close) redirects to index page
    const closeIcon = document.querySelector('.material-symbols-outlined.text-2xl');
    if (closeIcon) {
        closeIcon.style.cursor = 'pointer';
        closeIcon.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});
