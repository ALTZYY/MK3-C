/* ==========================================================================
   BOBBLE EDITORIAL EXPERIENCE — INTERACTIVE SCRIPTS
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // --- Header Scroll Effect ---
  const header = document.querySelector('.site-header');
  
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check

  // --- Smooth Scroll for Navigation Links ---
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // --- Custom Boba Pearl Cursor Script ---
  const cursorDot = document.getElementById('cursor-dot');
  const cursorPearl = document.getElementById('cursor-pearl');

  if (cursorDot && cursorPearl) {
    let mouseX = -100, mouseY = -100;
    let pearlX = -100, pearlY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    const animateCursor = () => {
      pearlX += (mouseX - pearlX) * 0.18;
      pearlY += (mouseY - pearlY) * 0.18;

      cursorPearl.style.left = `${pearlX}px`;
      cursorPearl.style.top = `${pearlY}px`;

      requestAnimationFrame(animateCursor);
    };
    animateCursor();

    const interactiveElements = document.querySelectorAll('a, button, .product-card, .btn-pill-outline, .btn-pill-solid, .icon-btn');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorPearl.classList.add('hovered');
        cursorDot.classList.add('hovered');
      });
      el.addEventListener('mouseleave', () => {
        cursorPearl.classList.remove('hovered');
        cursorDot.classList.remove('hovered');
      });
    });
  }

  // --- Floating Pearl Parallax Effect ---
  const pearlStickers = document.querySelectorAll('.floating-isolated-pearl, .floating-pearl-dot');
  if (pearlStickers.length > 0) {
    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      pearlStickers.forEach((sticker, index) => {
        const factor = (index + 1) * 0.008;
        const moveX = (clientX - window.innerWidth / 2) * factor;
        const moveY = (clientY - window.innerHeight / 2) * factor;
        sticker.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });
  }

  // --- Scroll Intersection Observer for Fade In Animations ---
  const observeElements = document.querySelectorAll('.product-card, .signature-hero-card, .craft-item, .ritual-card');
  
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
    revealObserver.observe(el);
  });
});
