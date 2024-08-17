document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for anchor links
    const smoothScroll = (target) => {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    };

    // Event listener for navigation clicks
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href');
            smoothScroll(target);
        });
    });

    // Dynamic interaction example
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        alert('Thank you for your interest! We will get back to you shortly.');
    });
});

// Toggle menu for responsive design
function toggleMenu() {
    const nav = document.querySelector('.nav ul');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}