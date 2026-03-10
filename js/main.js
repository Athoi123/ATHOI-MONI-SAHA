// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Remove loader when page is fully loaded
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
        
        // Trigger initial Hero animations only after loader is gone
        gsap.from(".hero h1", { y: 30, opacity: 0, duration: 1, ease: "power3.out" });
        gsap.from(".hero h2", { y: 30, opacity: 0, duration: 1, delay: 0.2, ease: "power3.out" });
        gsap.from(".hero p", { y: 30, opacity: 0, duration: 1, delay: 0.4, ease: "power3.out" });
        gsap.from(".btn-group", { y: 30, opacity: 0, duration: 1, delay: 0.6, ease: "power3.out" });
    }, 500);
});

// Animate Section Titles
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: "top 80%", // Animates when top of title hits 80% down the viewport
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});

// Animate Cards (Skills, Projects, Research) with a stagger effect
const cardSections = ['.skills-grid', '.project-grid'];

cardSections.forEach(selector => {
    const grid = document.querySelector(selector);
    if(grid) {
        gsap.from(grid.children, {
            scrollTrigger: {
                trigger: grid,
                start: "top 85%",
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15, // Cascading animation effect
            ease: "power2.out"
        });
    }
});

// Animate independent single cards (About, Achievements, Contact)
gsap.utils.toArray('.about-card, .inline-card, .contact-card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    });
});