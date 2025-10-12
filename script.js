
// Typing effect (simple)
const typedText = "Hi, I'm SCode — a creative developer passionate about design, code, and user experience.";
const typedEl = document.getElementById('typed');
let i = 0;
function typeWriter(){ if(i<=typedText.length){ typedEl.innerHTML = typedText.slice(0,i) + (i%2? '_':''); i++; setTimeout(typeWriter,28);} else { typedEl.innerHTML = typedText; } }
document.addEventListener('DOMContentLoaded', ()=>{ typeWriter(); });

// Theme toggle (dark/light) with localStorage
const themeToggle = document.getElementById('themeToggle');
themeToggle && themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('light');
    themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
    localStorage.setItem('scode_theme', document.body.classList.contains('light') ? 'light' : 'dark');
});
// Load saved theme
if(localStorage.getItem('scode_theme')==='light'){ document.body.classList.add('light'); if(themeToggle) themeToggle.textContent='☀️'; }

// Reveal on scroll
const reveals = Array.from(document.querySelectorAll('.reveal'));
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(ent=>{ if(ent.isIntersecting){ ent.target.classList.add('visible'); obs.unobserve(ent.target); } });
},{threshold:0.12});
reveals.forEach(r=>obs.observe(r));

// Back to top button
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', ()=>{ if(window.scrollY>300) topBtn.style.display='flex'; else topBtn.style.display='none'; });
topBtn && topBtn.addEventListener('click', ()=>{ window.scrollTo({top:0,behavior:'smooth'}); });

// Smooth links handled by browser for external; internal anchors optional
