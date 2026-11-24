

// Welcome message
console.log("Welcome to Kaneez's Portfolio!");

// Smooth navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        console.log("Navigating to: " + this.textContent);
    });
});

// Reveal sections while scrolling
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});
