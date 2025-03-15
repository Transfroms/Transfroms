// Script untuk animasi scroll
document.addEventListener('DOMContentLoaded', function() {
    // Animasi untuk service cards saat di-scroll
    const serviceCards = document.querySelectorAll('.service-card');
    const statsItems = document.querySelectorAll('.stat-item');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    // Fungsi untuk mengecek apakah elemen terlihat saat di-scroll
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Fungsi untuk menambahkan kelas 'animate' pada elemen yang terlihat
    function checkVisibility() {
        serviceCards.forEach(card => {
            if (isElementInViewport(card)) {
                card.style.opacity = 1;
                card.style.transform = 'translateY(0)';
            }
        });
        
        statsItems.forEach((item, index) => {
            if (isElementInViewport(item)) {
                setTimeout(() => {
                    item.style.opacity = 1;
                    item.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
        
        testimonialCards.forEach((card, index) => {
            if (isElementInViewport(card)) {
                setTimeout(() => {
                    card.style.opacity = 1;
                    card.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }
    
    // Set initial style
    serviceCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.5s ease';
    });
    
    statsItems.forEach(item => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.5s ease';
    });
    
    testimonialCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.5s ease';
    });
    
    // Check awal saat halaman dimuat
    checkVisibility();
    
    // Menambahkan event listener untuk scroll
    window.addEventListener('scroll', checkVisibility);
    
    // Smooth scrolling untuk navigasi menu
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Counter animation untuk statistik
    function animateCounter(el) {
        const target = parseInt(el.innerText.replace(/\D/g, ''), 10);
        const duration = 2000; // ms
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                el.textContent = el.textContent.includes('+') ? 
                    `${target}+` : target;
                clearInterval(timer);
            } else {
                el.textContent = el.textContent.includes('+') ? 
                    `${Math.floor(current)}+` : Math.floor(current);
                    el.textContent = el.textContent.includes('+') ? 
                    `${Math.floor(current)}+` : Math.floor(current);
            }
        }, 16);
    }

    // Inisialisasi counter animation ketika elemen statistik terlihat
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    function checkStatsVisibility() {
        if (!animated && isElementInViewport(document.querySelector('.stats-section'))) {
            statNumbers.forEach(number => {
                animateCounter(number);
            });
            animated = true;
        }
    }

    // Check stats visibility on scroll
    window.addEventListener('scroll', checkStatsVisibility);
    // Initial check
    checkStatsVisibility();
});

document.addEventListener('DOMContentLoaded', () => {
    const sideNav = document.getElementById('side-nav');
    const menuToggle = document.querySelector('.side-nav-toggle');
    const closeBtn = document.getElementById('side-nav-close-btn');

    // Open side nav
    menuToggle.addEventListener('click', () => {
        sideNav.classList.add('open');
        menuToggle.classList.add('hidden');
    });

    // Close side nav
    closeBtn.addEventListener('click', () => {
        sideNav.classList.remove('open');
        setTimeout(() => {
            menuToggle.classList.remove('hidden');
        }, 300); // Match the transition time
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!sideNav.contains(e.target) && 
            !menuToggle.contains(e.target) && 
            sideNav.classList.contains('open')) {
            sideNav.classList.remove('open');
            setTimeout(() => {
                menuToggle.classList.remove('hidden');
            }, 300);
        }
    });
});