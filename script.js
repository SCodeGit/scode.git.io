// ----------------------------
// Typing effect
// ----------------------------
const typedText = "Hi, I'm SCode — a creative developer passionate about design, code, and user experience.";
const typedEl = document.getElementById('typed');
let i = 0;

function typeWriter() {
    if (!typedEl) return;
    if (i <= typedText.length) {
        typedEl.innerHTML = typedText.slice(0, i) + (i % 2 ? '_' : '');
        i++;
        setTimeout(typeWriter, 28);
    } else {
        typedEl.innerHTML = typedText;
    }
}

document.addEventListener('DOMContentLoaded', () => { typeWriter(); });


// ----------------------------
// Theme toggle (dark/light) with localStorage
// ----------------------------
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        themeToggle.textContent = document.body.classList.contains('light-theme') ? '☀️' : '🌙';
        localStorage.setItem('scode_theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
    });
}

// Load saved theme on page load
if (localStorage.getItem('scode_theme') === 'light') {
    document.body.classList.add('light-theme');
    if (themeToggle) themeToggle.textContent = '☀️';
} else {
    if (themeToggle) themeToggle.textContent = '🌙';
}


// ----------------------------
// Reveal animations on scroll
// ----------------------------
const reveals = Array.from(document.querySelectorAll('.reveal'));
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

reveals.forEach(r => observer.observe(r));


// ----------------------------
// Back-to-top button
// ----------------------------
const topBtn = document.getElementById('topBtn');
if (topBtn) topBtn.style.display = 'none';

window.addEventListener('scroll', () => {
    if (!topBtn) return;
    topBtn.style.display = window.scrollY > 300 ? 'flex' : 'none';
});

if (topBtn) {
    topBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
