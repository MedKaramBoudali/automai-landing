document.addEventListener('DOMContentLoaded', function() {
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to your backend
            // For now, we'll just log it and show a success message
            console.log('Contact Form Submitted:', { name, email, subject, message });
            
            alert('Thank you for your message! We will contact you soon.');
            
            // Reset the form
            contactForm.reset();
            
            // In a real implementation, you would:
            // 1. Validate the form data
            // 2. Send it to your server (or use a service like Formspree)
            // 3. Handle the response (success/error)
            // Example with fetch:
            /*
            fetch('your-backend-endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message
                }),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Thank you for your message! We will contact you soon.');
                contactForm.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('There was an error submitting your form. Please try again.');
            });
            */
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // You can add more interactive features here as needed
    // For example:
    // - Animation on scroll
    // - Form validation
    // - Dynamic content loading
});
