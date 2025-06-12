/**
 * JNR SHOWCASE - ELITE INTERACTIONS
 *
 * This script handles three key professional-grade features:
 * 1.  Intersection Observer for staggered, scroll-triggered animations.
 * 2.  A "show-on-scroll-up" navigation bar for clean UI.
 * 3.  Smooth scrolling for all anchor links for a seamless single-page experience.
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


  // --- 2. Smart "show-on-scroll-up" Navigation Bar ---
  const nav = document.querySelector('.main-nav');
  let lastScrollY = window.scrollY;

  // Make nav visible from the start if page is already scrolled
  if (lastScrollY > 100) {
      nav.classList.add('visible');
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100 && lastScrollY > window.scrollY) {
      // Scrolled up past the 100px threshold
      nav.classList.add('visible');
    } else {
      // Scrolled down or at the very top
      nav.classList.remove('visible');
    }
    lastScrollY = window.scrollY;
  });


  // --- 3. Smooth Scroll for all Anchor Links ---
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