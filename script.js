// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
    
    if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !mobileMenuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuToggle.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
}

window.addEventListener('scroll', activateNavLink);

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form Validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.replace(/\D/g, '').length >= 10;
}

function showFieldError(input, message) {
    const existingError = input.parentElement.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.cssText = 'color: #ef4444; font-size: 0.875rem; margin-top: 0.5rem;';
    input.parentElement.appendChild(errorDiv);
    input.style.borderColor = '#ef4444';
}

function clearFieldError(input) {
    const error = input.parentElement.querySelector('.field-error');
    if (error) {
        error.remove();
    }
    if (input.value && input.validity.valid) {
        input.style.borderColor = '#10b981';
    } else {
        input.style.borderColor = '';
    }
}

// Contact Form
const contactForm = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

if (emailInput) {
    emailInput.addEventListener('input', () => {
        clearFieldError(emailInput);
        if (emailInput.value && !validateEmail(emailInput.value)) {
            showFieldError(emailInput, 'Please enter a valid email address');
        }
    });

    emailInput.addEventListener('blur', () => {
        if (emailInput.value && !validateEmail(emailInput.value)) {
            showFieldError(emailInput, 'Please enter a valid email address');
        } else {
            clearFieldError(emailInput);
        }
    });
}

if (phoneInput) {
    phoneInput.addEventListener('input', () => {
        clearFieldError(phoneInput);
        if (phoneInput.value && !validatePhone(phoneInput.value)) {
            showFieldError(phoneInput, 'Please enter a valid phone number (at least 10 digits)');
        }
    });

    phoneInput.addEventListener('blur', () => {
        if (phoneInput.value && !validatePhone(phoneInput.value)) {
            showFieldError(phoneInput, 'Please enter a valid phone number (at least 10 digits)');
        } else {
            clearFieldError(phoneInput);
        }
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const existingMessage = contactForm.querySelector('.form-success, .form-error');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value.trim();
        
        let hasErrors = false;
        
        if (!name) {
            showFieldError(document.getElementById('name'), 'Name is required');
            hasErrors = true;
        }
        
        if (!email || !validateEmail(email)) {
            showFieldError(document.getElementById('email'), 'Valid email is required');
            hasErrors = true;
        }
        
        if (!phone || !validatePhone(phone)) {
            showFieldError(document.getElementById('phone'), 'Valid phone number is required');
            hasErrors = true;
        }
        
        if (!service) {
            showFieldError(document.getElementById('service'), 'Please select a service type');
            hasErrors = true;
        }
        
        if (!message) {
            showFieldError(document.getElementById('message'), 'Message is required');
            hasErrors = true;
        }
        
        if (hasErrors) {
            return;
        }
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.disabled = true;
        submitButton.innerHTML = '<span>Submitting...</span>';
        contactForm.classList.add('form-loading');
        
        const formData = { name, email, phone, service, message };
        
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            const successMessage = document.createElement('div');
            successMessage.className = 'form-success';
            successMessage.style.cssText = `
                padding: 1.25rem;
                background: linear-gradient(135deg, #10b981, #059669);
                color: white;
                border-radius: 12px;
                margin-top: 1.5rem;
                text-align: center;
                font-weight: 600;
                animation: slideIn 0.3s ease;
            `;
            successMessage.textContent = 'Thank you! Your request has been submitted. We\'ll get back to you soon.';
            contactForm.appendChild(successMessage);
            
            contactForm.reset();
            if (emailInput) clearFieldError(emailInput);
            if (phoneInput) clearFieldError(phoneInput);
            
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            
            setTimeout(() => {
                successMessage.remove();
            }, 5000);
            
            console.log('Contact form submitted:', formData);
            
        } catch (error) {
            const errorMessage = document.createElement('div');
            errorMessage.className = 'form-error';
            errorMessage.style.cssText = `
                padding: 1.25rem;
                background: linear-gradient(135deg, #ef4444, #dc2626);
                color: white;
                border-radius: 12px;
                margin-top: 1.5rem;
                text-align: center;
                font-weight: 600;
                animation: slideIn 0.3s ease;
            `;
            errorMessage.textContent = 'Sorry, there was an error. Please try again or call us directly.';
            contactForm.appendChild(errorMessage);
            
            setTimeout(() => {
                errorMessage.remove();
            }, 5000);
            
            console.error('Form submission error:', error);
        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
            contactForm.classList.remove('form-loading');
        }
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll('.service-card, .fleet-card, .testimonial-card, .benefit-item, .badge-item');

animateElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(el);
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    activateNavLink();
    
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
