document.addEventListener("mousemove", function (e) {
    const bg = document.querySelector(".animated-bg");
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    bg.style.backgroundPosition = `${mouseX * 100}% ${mouseY * 100}%`;
});

let currentSection = 0;
const sections = document.querySelectorAll('.section');

// Function to scroll to the specific section
function scrollToSection(sectionIndex) {
    sections[sectionIndex].scrollIntoView({ behavior: 'auto' });
}

// Add scroll event listener
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        currentSection = Math.min(currentSection + 1, sections.length - 1);
    } else {
        currentSection = Math.max(currentSection - 1, 0);
    }
    scrollToSection(currentSection);
});

// Add keypress listener for Page Down/Arrow Keys
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'PageDown') {
        currentSection = Math.min(currentSection + 1, sections.length - 1);
    } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        currentSection = Math.max(currentSection - 1, 0);
    }
    scrollToSection(currentSection);
});

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
        svgIcons.forEach(icon => {
            icon.classList.remove('fixed');
            icon.style.top = 'auto';
            icon.style.left = 'auto';
        });
    }
});
const circleContainer = document.querySelector('.ring3');

circleContainer.addEventListener('mousemove', function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const dx = x - centerX;
    const dy = y - centerY;

    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);

    const glowStrength = (1 - distance / maxDistance) * 0.6; // Adjust glow strength

    this.style.boxShadow = `${dx / 10}px ${dy / 10}px 40px 30px rgba(52, 152, 219, ${glowStrength})`;
    this.style.transform = `rotateX(${dy / 10}deg) rotateY(${dx / 10}deg)`;
});

circleContainer.addEventListener('mouseleave', function () {
    // Reset the box-shadow and transform when the mouse leaves
    this.style.boxShadow = `0 0 0 0 rgba(52, 152, 219, 0)`;
    this.style.transform = 'rotateX(0) rotateY(0)';
});
