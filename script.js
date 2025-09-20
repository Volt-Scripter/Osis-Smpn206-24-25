// Navigation functionality
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const navbar = document.getElementById('navbar');

// Toggle mobile menu
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Simple AOS (Animate On Scroll) implementation
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function isElementPartiallyInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    
    const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
    const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
    
    return (vertInView && horInView);
}

function handleScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    animatedElements.forEach(el => {
        if (isElementPartiallyInViewport(el)) {
            el.classList.add('aos-animate');
        }
    });
}

// Initialize animations on scroll
window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

// Contact form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Mohon lengkapi semua field!');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Format email tidak valid!');
        return;
    }
    
    // Simulate form submission
    alert('Pesan Anda berhasil dikirim! Terima kasih telah menghubungi OSIS SMPN 206.');
    
    // Reset form
    this.reset();
    
    // Remove focus from labels
    const labels = this.querySelectorAll('label');
    labels.forEach(label => {
        label.style.top = '1rem';
        label.style.left = '1rem';
        label.style.fontSize = '1rem';
        label.style.color = 'rgba(255, 255, 255, 0.7)';
        label.style.background = 'none';
    });
});

// Add floating label animation for contact form
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', function() {
        const label = this.nextElementSibling;
        if (this.value === '') {
            label.style.top = '1rem';
            label.style.left = '1rem';
            label.style.fontSize = '1rem';
            label.style.color = 'rgba(255, 255, 255, 0.7)';
            label.style.background = 'none';
        }
    });
    
    input.addEventListener('focus', function() {
        const label = this.nextElementSibling;
        label.style.top = '-0.5rem';
        label.style.left = '0.5rem';
        label.style.fontSize = '0.8rem';
        label.style.color = '#06b6d4';
        label.style.background = 'rgba(30, 64, 175, 0.8)';
        label.style.padding = '0.2rem 0.5rem';
        label.style.borderRadius = '4px';
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-image');
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
        handleScrollAnimations();
    }, 100);
});

// Gallery lightbox effect (simple implementation)
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const overlay = this.querySelector('.gallery-overlay');
        const title = overlay.querySelector('h4').textContent;
        
        // Simple modal implementation
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
        `;
        
        const modalImg = document.createElement('img');
        modalImg.src = img.src;
        modalImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
        `;
        
        const closeBtn = document.createElement('div');
        closeBtn.innerHTML = '×';
        closeBtn.style.cssText = `
            position: absolute;
            top: 20px;
            right: 30px;
            color: white;
            font-size: 40px;
            cursor: pointer;
            z-index: 10001;
        `;
        
        modal.appendChild(modalImg);
        modal.appendChild(closeBtn);
        document.body.appendChild(modal);
        
        // Close modal events
        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            document.body.removeChild(modal);
        });
        
        // ESC key to close
        const handleEsc = (e) => {
            if (e.key === 'Escape') {
                document.body.removeChild(modal);
                document.removeEventListener('keydown', handleEsc);
            }
        };
        document.addEventListener('keydown', handleEsc);
    });
});

// Add typing animation to hero title
function typeWriter(element, text, speed = 50) {
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

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.title-main');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 100);
        }, 1000);
    }
});

// Add smooth reveal animations for cards
function revealOnScroll() {
    const reveals = document.querySelectorAll('.feature-card, .program-card, .division-card');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);

// Add CSS for reveal animation
const style = document.createElement('style');
style.textContent = `
    .feature-card,
    .program-card,
    .division-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .feature-card.active,
    .program-card.active,
    .division-card.active {
        opacity: 1;
        transform: translateY(0);
    }
    
    body.loaded .hero-content {
        animation: fadeInUp 1s ease-out;
    }
`;
document.head.appendChild(style);