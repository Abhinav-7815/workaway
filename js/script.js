document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.querySelector('button[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
            mobileMenuButton.setAttribute('aria-expanded', !expanded);
            mobileMenu.classList.toggle('hidden');

            // Icon toggle
            const icon = mobileMenuButton.querySelector('.material-icons-outlined');
            if (icon) {
                icon.textContent = expanded ? 'menu' : 'close';
            }
        });
    }
});
