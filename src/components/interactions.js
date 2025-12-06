// Smooth scrolling
export function setupSmoothScrolling() {
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
}

// Scroll animations - fade in elements as they enter viewport
export function setupScrollAnimations() {
  // Create observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Stop observing once animated so it stays visible
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Find all elements that should be animated
  document.querySelectorAll(
    '.scroll-animate, .scroll-animate-fade, .scroll-animate-left, .scroll-animate-right'
  ).forEach(el => {
    observer.observe(el);
  });
}

// Add spotlight effect that follows mouse on text (only on desktop)
export function setupSpotlightEffect() {
  const supportsHover = window.matchMedia('(hover: hover)').matches;

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
}
