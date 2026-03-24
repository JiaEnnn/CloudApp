// Redirects for Login tab and Login now link
window.addEventListener('DOMContentLoaded', function() {
    // Login tab (menu)
    const tabLinks = document.querySelectorAll('a');
    tabLinks.forEach(link => {
        if (link.textContent.trim() === 'Login') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                window.location.href = 'login.html';
            });
        }
    });

    // Login now link in footer
    const loginNow = document.querySelector('a.text-primary.font-bold');
    if (loginNow && loginNow.textContent.trim().toLowerCase().includes('login')) {
        loginNow.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'login.html';
        });
    }

    // Cross icon (close) redirects to index page
    const closeIcon = document.querySelector('.material-symbols-outlined.text-2xl');
    if (closeIcon) {
        closeIcon.style.cursor = 'pointer';
        closeIcon.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});
