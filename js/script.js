/*let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    }
}*/

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideInterval = 3000; // Time in milliseconds for each slide
let slideTimer;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

// Function to go to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Loop back to the first slide
    showSlide(currentSlide);
}

// Function to start the auto-slide feature
function startSlideShow() {
    slideTimer = setInterval(nextSlide, slideInterval);
}

// Function to stop the auto-slide feature
function stopSlideShow() {
    clearInterval(slideTimer);
}

// Event listeners for mouse enter and leave to pause and resume the slideshow
const banner = document.querySelector('.banner');
banner.addEventListener('mouseenter', stopSlideShow);
banner.addEventListener('mouseleave', startSlideShow);

// Start the slideshow when the page loads
window.onload = startSlideShow;

// Form validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Simple validation
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If validation passes, show a success message
    alert('Thank you for your message, ' + name + '! We will get back to you soon.');

    // Reset the form
    contactForm.reset();
});