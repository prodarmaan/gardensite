// EmailJS configuration
const EMAILJS_PUBLIC_KEY = 'mmCYPvMOsIVk1SXOR';
const EMAILJS_SERVICE_ID = 'service_s7q5q4j';
const EMAILJS_TEMPLATE_ID = 'template_nlxocxw';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitButton = this.querySelector('button[type="submit"]');
    const messageDiv = document.getElementById('form-message');
    
    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'SENDING...';
    messageDiv.textContent = '';
    
    // Get form data
    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };
    
    try {
        // Send email via EmailJS
        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData);
        
        messageDiv.textContent = 'thank you! your message has been sent.';
        messageDiv.style.color = '#2C3028';
        
        // Clear form
        this.reset();
        
    } catch (error) {
        console.error('Error submitting form:', error);
        messageDiv.textContent = 'Error submitting form. Please try again.';
        messageDiv.style.color = '#ff0000';
    }
    
    // Re-enable button
    submitButton.disabled = false;
    submitButton.textContent = 'SUBMIT';
});