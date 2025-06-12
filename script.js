/**
 * JNR SHOWCASE - ELITE INTERACTIONS
 *
 * This script handles two key professional-grade features:
 * 1.  Intersection Observer for staggered, scroll-triggered animations.
 * 2.  Smooth scrolling for all anchor links for a seamless single-page experience.
 */
document.addEventListener('DOMContentLoaded', () => {

  // --- 1. Scroll-based "fade-in" animations ---
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Set transition delay from data attribute, falling back to 0
        const delay = entry.target.dataset.delay || '0';
        entry.target.style.transitionDelay = `${delay}ms`;
        
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Performance boost: stop observing once visible
      }
    });
  }, {
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Trigger a little sooner
  });

  animatedElements.forEach(element => {
    observer.observe(element);
  });


  // --- 2. Smooth Scroll for all Anchor Links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

});