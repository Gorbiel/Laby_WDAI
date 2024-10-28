document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting initially

    const emailInput = document.getElementById('email');
    const emailValue = emailInput.value;

    // Regex for validating email address
    const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    // Check if the email matches the regex pattern
    if (!emailRegex.test(emailValue)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return; // Stop the form submission if email is invalid
    }

    // If validation passes, proceed with form submission
    alert('Your message has been sent!');
    this.reset();
    // The rest requires php
});