document.getElementById('start-btn').addEventListener('click', function() {
    // Welcome screen fade out smoothly
    const welcomeScreen = document.getElementById('welcome-screen');
    welcomeScreen.style.opacity = '0';
    
    setTimeout(() => {
        welcomeScreen.classList.add('hidden');
        
        // Show the main digital scrapbook content
        const mainContent = document.getElementById('main-content');
        mainContent.classList.remove('hidden');
        
        // Background Music Play
        const audio = document.getElementById('bg-audio');
        audio.play().catch(error => console.log("Audio auto-trigger bypass:", error));
        
        // Initialize Premium Effects
        startAestheticHearts();
        initScrollReveal();
    }, 1000); // 1 second clean fade transition delay
});

// DELICATE FLOATING HEARTS EFFECT
function startAestheticHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        const icons = ['✨', '🤍', '💖', '🌸'];
        heart.innerText = icons[Math.floor(Math.random() * icons.length)];
        
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = Math.random() * 10 + 15 + 'px';
        heart.style.animationDuration = Math.random() * 2 + 4 + 's'; // Calm floating speed
        
        document.body.appendChild(heart);
        
        setTimeout(() => { heart.remove(); }, 5000);
    }, 450);
}

// MODERN SCROLL REVEAL TRIGGER
function initScrollReveal() {
    const polaroids = document.querySelectorAll('.polaroid');
    const letterCard = document.querySelector('.letter-card-aesthetic');
    
    // Applying baseline hidden state classes dynamically
    polaroids.forEach(el => el.classList.add('reveal-element'));
    if(letterCard) letterCard.classList.add('reveal-element');
    
    // Setting up the observer to watch viewport scrolls
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adds 'active' style trigger when user scrolls past 15% of the element
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 
    });
    
    polaroids.forEach(el => observer.observe(el));
    if(letterCard) observer.observe(letterCard);
}