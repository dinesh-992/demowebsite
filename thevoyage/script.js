const texts = ["Study Visa Assistance", "Training", "Scholarships","Career Guidance"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const textElement = document.getElementById("changing-text");

function typeEffect() {
    const currentText = texts[index];

    if (!isDeleting) {
        textElement.textContent = currentText.substring(0, charIndex++);
    } else {
        textElement.textContent = currentText.substring(0, charIndex--);
    }

    let typingSpeed = isDeleting ? 50 : 80;

    if (!isDeleting && charIndex === currentText.length + 1) {
        isDeleting = true;
        typingSpeed = 1500;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length;
        typingSpeed = 500;
    }

    // Move cursor along with text
    textElement.style.borderRight = "4px solid orange";

    setTimeout(typeEffect, typingSpeed);
}

typeEffect(); // Start the animation