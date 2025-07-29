// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('nav-toggle');
  const navMobile = document.getElementById('nav-mobile');
  const contactForm = document.getElementById('contactForm');

  // Handle scroll events for navbar
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Handle mobile menu toggle
  navToggle.addEventListener('click', function() {
    navMobile.classList.toggle('show');
    const icon = navToggle.querySelector('i');
    
    if (navMobile.classList.contains('show')) {
      icon.className = 'fas fa-times';
    } else {
      icon.className = 'fas fa-bars';
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    const isNavbarClick = navbar.contains(event.target);
    
    if (!isNavbarClick && navMobile.classList.contains('show')) {
      navMobile.classList.remove('show');
      navToggle.querySelector('i').className = 'fas fa-bars';
    }
  });

  // Handle contact form submission
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');
      
      // Create mailto link
      const mailtoLink = `mailto:manage.verma.hemant@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Reset form
      contactForm.reset();
      
      // Show success message (you can customize this)
      alert('Thank you for your message! Your email client should open with the message ready to send.');
    });
  }

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Add animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animatedElements = document.querySelectorAll('.card, .timeline-card, .skill-category, .contact-card, .cert-card, .degree-card, .project-card');
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});

// Smooth scroll function for navigation
function scrollToSection(sectionId) {
  const element = document.querySelector(sectionId);
  const navMobile = document.getElementById('nav-mobile');
  const navToggle = document.getElementById('nav-toggle');
  
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
  
  // Close mobile menu if open
  if (navMobile.classList.contains('show')) {
    navMobile.classList.remove('show');
    navToggle.querySelector('i').className = 'fas fa-bars';
  }
}

// Add typing effect for hero subtitle (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize typing effect when page loads
window.addEventListener('load', function() {
  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle) {
    const originalText = heroSubtitle.textContent;
    setTimeout(() => {
      typeWriter(heroSubtitle, originalText, 50);
    }, 1000);
  }
});