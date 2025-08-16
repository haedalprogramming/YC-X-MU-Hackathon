// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Mobile menu toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const currentTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon(theme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    icon.className = theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Poster section toggle
const posterViewBtn = document.getElementById('posterViewBtn');
const posterSection = document.getElementById('poster-section');
let isPosterVisible = false;

function updatePosterButton() {
    const buttonText = posterViewBtn.querySelector('span');
    const buttonIcon = posterViewBtn.querySelector('i');
    
    if (isPosterVisible) {
        buttonText.textContent = '포스터 닫기';
        buttonIcon.className = 'fas fa-times';
    } else {
        buttonText.textContent = '포스터 보기';
        buttonIcon.className = 'fas fa-image';
    }
}

posterViewBtn.addEventListener('click', () => {
    if (!isPosterVisible) {
        // Show poster
        posterSection.style.display = 'block';
        setTimeout(() => {
            posterSection.classList.add('show');
        }, 10);
        
        // Smooth scroll to poster section with navbar offset
        setTimeout(() => {
            const offsetTop = posterSection.offsetTop - 80; // Account for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }, 100);
        
        isPosterVisible = true;
    } else {
        // Hide poster
        posterSection.classList.remove('show');
        setTimeout(() => {
            posterSection.style.display = 'none';
        }, 500);
        
        isPosterVisible = false;
    }
    
    updatePosterButton();
});

// Share modal
const shareBtn = document.querySelector('.share-btn');
const shareModal = document.getElementById('shareModal');
const modalClose = document.getElementById('modalClose');

shareBtn.addEventListener('click', () => {
    shareModal.classList.add('active');
});

modalClose.addEventListener('click', () => {
    shareModal.classList.remove('active');
});

shareModal.addEventListener('click', (e) => {
    if (e.target === shareModal) {
        shareModal.classList.remove('active');
    }
});

// Countdown timer (optional)
function updateCountdown() {
    const deadline = new Date('2025-09-19T23:59:59').getTime();
    const now = new Date().getTime();
    const distance = deadline - now;
    
    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        
        // Update countdown display if you add a countdown element
    }
}

// Update countdown every hour
setInterval(updateCountdown, 3600000);
updateCountdown();

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero-bg');
    const speed = 0.5;
    
    if (parallax) {
        parallax.style.transform = `translateY(${scrolled * speed}px)`;
    }
});

// Add hover effect to cards
document.querySelectorAll('.about-card, .edu-card, .prize-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Form submission handling (when form is added)
const applyButton = document.querySelector('.btn-apply-now');
applyButton.addEventListener('click', (e) => {
    e.preventDefault();
    // Add Google Forms link or custom form handling
    window.open('https://forms.google.com/your-form-link', '_blank');
});

// Email button
const emailButton = document.querySelector('.btn-email');
if (emailButton) {
    emailButton.addEventListener('click', (e) => {
        // Email functionality is handled by mailto: link in HTML
    });
}