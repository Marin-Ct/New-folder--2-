// Elements
console.log("Script loaded successfully!");

const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.getElementById("no-btn");
const yesBtn = document.querySelector(".yes-btn");

console.log("NO button found:", noBtn);
console.log("YES button found:", yesBtn);

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const reactionFrame = document.getElementById("reaction-frame");
const reactionImage = document.getElementById("reaction-image");
const reactionText = document.getElementById("reaction-text");

const loveMessageScreen = document.getElementById("love-message-screen");
const galleryScreen = document.getElementById("gallery-screen");
const continueBtn = document.getElementById("continue-btn");
const heartsContainer = document.getElementById("hearts-container");

// Kiss Counter elements
const pupBtn = document.getElementById("pup-btn");
const kissScreen = document.getElementById("kiss-screen");
const kissImage = document.getElementById("kiss-image");
const kissImageContainer = document.getElementById("kiss-image-container");
const kissCounter = document.getElementById("kiss-counter");
const kissHeartsContainer = document.getElementById("kiss-hearts-container");

// Reaction data for each "No" click
const reactions = [
   { image: "cat_heart1.png", text: "Si o zas brat? 💕" },
    { image: "cat_heart2.jpg", text: "Strasnic💔" },
    { image: "cat_heart3.gif", text: "🤔" },
    { image: "cat_heart4.gif", text: " 💕" },
    { image: "cat_heart5.webp", text: "🤨" },
    { image: "cat_heart6.webp", text: "🤨" },
    { image: "cat_heart7.jpg", text: "🤗" },
    { image: "cat_heart8.gif", text: "💔" },
    { image: "cat_heart9.webp", text: "💔" },
    { image: "cat_heart.gif", text: "Gata ajunge! nu mai ai incotro 😍" }
];

let noClickCount = 0;
let kissCount = 0;
let isKissing = false;

// Click Envelope
envelope.addEventListener("click", () => {
    console.log("Envelope clicked!");
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// NO button click handler
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log("NO button clicked! Count:", noClickCount);
    
    if (noClickCount < reactions.length) {
        // Hide the cat
        catImg.style.display = "none";
        
        // Show reaction frame with image and text
        reactionFrame.style.display = "block";
        reactionImage.src = reactions[noClickCount].image;
        reactionText.textContent = reactions[noClickCount].text;
        
        console.log("Showing reaction:", reactions[noClickCount].text);
        
        noClickCount++;
        
        // After 10 clicks, hide the NO button
        if (noClickCount >= reactions.length) {
            setTimeout(() => {
                noBtn.style.display = "none";
            }, 500);
        }
    }
});

// YES button click handler
yesBtn.addEventListener("click", () => {
    title.textContent = "Mmmmmmm)!";
    
    // Change to dance cat
    catImg.src = "cat_dance.gif";
    catImg.style.display = "block";
    reactionFrame.style.display = "none";
    
    document.querySelector(".letter-window").classList.add("final");
    
    buttons.style.display = "none";
    finalText.style.display = "block";
    
    // After 2 seconds, scroll to love message screen
    setTimeout(() => {
        scrollToLoveMessage();
    }, 2000);
});

// Scroll to love message with hearts animation
function scrollToLoveMessage() {
    // Hide letter container
    letter.style.opacity = "0";
    
    setTimeout(() => {
        letter.style.display = "none";
        loveMessageScreen.style.display = "flex";
        
        // Animate hearts from bottom to top
        createHearts();
        
        // Smooth scroll effect
        window.scrollTo({
            top: loveMessageScreen.offsetTop,
            behavior: 'smooth'
        });
        
        setTimeout(() => {
            loveMessageScreen.querySelector('.love-window').classList.add('open');
        }, 100);
    }, 500);
}

// Create floating hearts animation
function createHearts() {
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = '♥';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
            heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
            heart.style.animationDelay = (Math.random() * 0.5) + 's';
            
            heartsContainer.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 100);
    }
}

// Continue button to show photo gallery
continueBtn.addEventListener("click", () => {
    loveMessageScreen.style.opacity = "0";
    
    setTimeout(() => {
        loveMessageScreen.style.display = "none";
        galleryScreen.style.display = "flex";
        
        window.scrollTo({
            top: galleryScreen.offsetTop,
            behavior: 'smooth'
        });
        
        setTimeout(() => {
            galleryScreen.querySelector('.gallery-window').classList.add('open');
        }, 100);
    }, 500);
});

// === KISS COUNTER FUNCTIONALITY ===

// PUP button click - navigate to kiss counter
pupBtn.addEventListener("click", () => {
    console.log("PUP button clicked!");
    galleryScreen.style.opacity = "0";
    
    setTimeout(() => {
        galleryScreen.style.display = "none";
        kissScreen.style.display = "flex";
        
        window.scrollTo({
            top: kissScreen.offsetTop,
            behavior: 'smooth'
        });
        
        setTimeout(() => {
            kissScreen.querySelector('.kiss-window').classList.add('open');
        }, 100);
    }, 500);
});

// Kiss image click handler
kissImageContainer.addEventListener("click", () => {
    if (isKissing) return; // Prevent rapid clicking
    
    isKissing = true;
    kissCount++;
    
    console.log("Kiss count:", kissCount);
    
    // Update counter with animation
    kissCounter.textContent = `Pupicii: ${kissCount}`;
    kissCounter.style.animation = 'none';
    setTimeout(() => {
        kissCounter.style.animation = 'counterPulse 0.3s ease';
    }, 10);
    
    // Change to kissing image (megf1.png)
    kissImage.src = "megf1.png";
    kissImage.classList.add('kissing');
    
    // Create multiple hearts
    createKissHearts();
    
    // After 800ms, switch back to normal image (megf0.png)
    setTimeout(() => {
        kissImage.src = "megf0.png";
        kissImage.classList.remove('kissing');
        isKissing = false;
    }, 800);
    
    // Reset counter at 100 kisses
    if (kissCount >= 100) {
        setTimeout(() => {
            kissCount = 0;
            kissCounter.textContent = "Pupicii: 0";
            
            // Show celebration message
            const celebration = document.createElement('div');
            celebration.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #ff1744 0%, #ff4081 100%);
                color: white;
                padding: 30px 60px;
                border-radius: 20px;
                font-size: 32px;
                font-weight: 700;
                z-index: 1000;
                box-shadow: 0 10px 40px rgba(255, 23, 68, 0.6);
                animation: celebrationPop 0.5s ease;
            `;
            celebration.textContent = "100 de pupici! 🎉💕";
            document.body.appendChild(celebration);
            
            setTimeout(() => {
                celebration.remove();
            }, 2000);
        }, 1000);
    }
});

// Create multiple hearts when kissing
function createKissHearts() {
    const numberOfHearts = 15; // Create 15 hearts per kiss
    
    for (let i = 0; i < numberOfHearts; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'kiss-heart';
            
            // Random heart symbols
            const heartSymbols = ['❤', '💕', '💖', '💗', '💓', '💝'];
            heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            
            // Random horizontal position
            const randomLeft = Math.random() * 100;
            heart.style.left = randomLeft + '%';
            
            // Random drift for variety
            const randomDrift = (Math.random() - 0.5) * 100;
            heart.style.setProperty('--drift', randomDrift + 'px');
            
            // Random size
            const randomSize = Math.random() * 20 + 25; // Between 25-45px
            heart.style.fontSize = randomSize + 'px';
            
            // Random animation duration
            const randomDuration = Math.random() * 1 + 2; // Between 2-3 seconds
            heart.style.animationDuration = randomDuration + 's';
            
            kissHeartsContainer.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, randomDuration * 1000);
        }, i * 50); // Stagger heart creation
    }
}

// Add celebration animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes celebrationPop {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.1);
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
