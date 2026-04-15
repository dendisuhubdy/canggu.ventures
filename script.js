// ============================================
// Canggu Ventures — Scripts
// ============================================

(function () {
    'use strict';

    // Nav scroll effect
    const nav = document.getElementById('nav');
    let lastScroll = 0;

    function onScroll() {
        const scrollY = window.scrollY;
        nav.classList.toggle('scrolled', scrollY > 60);
        lastScroll = scrollY;
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // Mobile menu toggle
    const toggle = document.getElementById('nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    let menuOpen = false;

    toggle.addEventListener('click', function () {
        menuOpen = !menuOpen;
        mobileMenu.classList.toggle('active', menuOpen);
        document.body.style.overflow = menuOpen ? 'hidden' : '';

        // Animate hamburger to X
        const spans = toggle.querySelectorAll('span');
        if (menuOpen) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        }
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            menuOpen = false;
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
            var spans = toggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '';
            spans[2].style.transform = '';
        });
    });

    // Scroll reveal
    var reveals = [];

    function initReveals() {
        var elements = document.querySelectorAll(
            '.about-label, .about-content, .portfolio-card, .contact-inner, .about-stats .stat'
        );
        elements.forEach(function (el) {
            el.classList.add('reveal');
            reveals.push(el);
        });
    }

    function checkReveals() {
        var windowHeight = window.innerHeight;
        reveals.forEach(function (el) {
            var top = el.getBoundingClientRect().top;
            if (top < windowHeight - 80) {
                el.classList.add('visible');
            }
        });
    }

    initReveals();
    window.addEventListener('scroll', checkReveals, { passive: true });
    checkReveals(); // Check on load

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
})();
