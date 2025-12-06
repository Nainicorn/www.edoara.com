// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Removed parallax effect - cards stay fixed
const supportsHover = window.matchMedia('(hover: hover)').matches;

// Add spotlight effect that follows mouse on text (only on desktop)
if (supportsHover) {
    document.querySelectorAll('.spotlight-container').forEach(container => {
        const spotlight = container.querySelector('.spotlight-overlay');
        const textElement = container.querySelector('.spotlight-text');
        if (!spotlight || !textElement) return;

        container.addEventListener('mousemove', (e) => {
            const textRect = textElement.getBoundingClientRect();

            const x = e.clientX - textRect.left;
            const y = e.clientY - textRect.top;

            const spotlightX = (x / textRect.width) * 100;
            const spotlightY = (y / textRect.height) * 100;

            spotlight.style.setProperty('--spotlight-x', spotlightX + '%');
            spotlight.style.setProperty('--spotlight-y', spotlightY + '%');
        });
    });
}

