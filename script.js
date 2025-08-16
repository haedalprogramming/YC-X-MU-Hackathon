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

// Share buttons functionality
document.querySelectorAll('.share-btn-modal').forEach(btn => {
    btn.addEventListener('click', () => {
        const shareType = btn.getAttribute('data-share');
        const url = window.location.href;
        const text = '연암공대 X 마산대 AI 해커톤에 참가하세요! 🚀';
        
        switch(shareType) {
            case 'kakao':
                // Kakao share would require Kakao SDK
                alert('카카오톡 공유 기능은 준비 중입니다.');
                break;
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
                break;
            case 'instagram':
                alert('인스타그램 공유는 모바일 앱에서 가능합니다.');
                break;
            case 'link':
                navigator.clipboard.writeText(url).then(() => {
                    alert('링크가 복사되었습니다!');
                });
                break;
        }
    });
});

// Social buttons
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const social = btn.getAttribute('data-social');
        // Add actual social media links here
        switch(social) {
            case 'instagram':
                window.open('https://instagram.com/yourhandle', '_blank');
                break;
            case 'facebook':
                window.open('https://facebook.com/yourpage', '_blank');
                break;
            case 'twitter':
                window.open('https://twitter.com/yourhandle', '_blank');
                break;
        }
    });
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

// Discord button
const discordButton = document.querySelector('.btn-discord');
discordButton.addEventListener('click', (e) => {
    e.preventDefault();
    // Add Discord invite link
    window.open('https://discord.gg/your-invite-code', '_blank');
});