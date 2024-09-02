document.addEventListener('scroll', function () {
    const heroSection = document.querySelector('.hero-section');
    const svgIcons = document.querySelectorAll('.floating-svg');

    // Get the bottom position of the hero section
    const heroBottom = heroSection.getBoundingClientRect().bottom;

    svgIcons.forEach((icon, index) => {
        if (heroBottom <= 0) {
            // User has scrolled past the hero section
            icon.classList.add('fixed');
            icon.style.top = `${20 + index * 60}px`; // Adjust top position based on index
        } else {
            // User is back in the hero section
            icon.classList.remove('fixed');
            icon.style.top = `${20 + index * 60}px`; // Reset top position
        }
    });
});
