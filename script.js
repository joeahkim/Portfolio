document.addEventListener('scroll', function () {
    const heroSection = document.querySelector('.hero-section');
    const svgContainer = document.querySelector('.svg-container');
    const svgIcons = document.querySelectorAll('.floating-svg');

    const heroBottom = heroSection.getBoundingClientRect().bottom;

    if (heroBottom <= 0) {
        svgIcons.forEach((icon, index) => {
            icon.classList.add('fixed');
            icon.style.top = `${150 + index * 60}px`;
            icon.style.left = '20px';
        });
    } else {
        // User is back in the hero section
        svgIcons.forEach(icon => {
            icon.classList.remove('fixed');
            icon.style.top = 'auto';
            icon.style.left = 'auto'; // Reset the left position
        });
    }
});
