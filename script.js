// Set dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Handle Reservation Form Submission
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const guests = document.getElementById('guests').value;
    
    alert(`Thank you, ${name}! Your request for a table for ${guests} has been received. We will call you shortly to confirm.`);
    
    // Clear the form after submission
    this.reset();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        // Darken the background slightly when scrolling down
        header.style.backgroundColor = 'rgba(26, 26, 26, 0.98)';
    } else {
        // Return to solid color at the very top
        header.style.backgroundColor = 'var(--dark-bg)';
    }
});