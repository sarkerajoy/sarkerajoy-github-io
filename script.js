document.addEventListener('DOMContentLoaded', () => {
    const introSection = document.getElementById('intro');
    const mainContent = document.getElementById('main-content');

    // Automatically transition to main content after the animation ends
    setTimeout(() => {
        introSection.classList.add('hidden'); // Hide the intro section
        mainContent.classList.remove('hidden'); // Show the main content
        mainContent.style.opacity = 1; // Fade in the main content
        document.body.style.overflow = 'auto'; // Enable scrolling for main content
    }, 4000); // Match duration to the text animation timing (4s)
});
