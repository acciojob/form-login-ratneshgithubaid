document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('nameForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values and trim whitespace
        const firstName = document.getElementById('fname').value.trim();
        const lastName = document.getElementById('lname').value.trim();
        
        // Validate inputs
        if (!firstName) {
            alert('Please enter your first name');
            document.getElementById('fname').focus();
            return;
        }
        
        if (!lastName) {
            alert('Please enter your last name');
            document.getElementById('lname').focus();
            return;
        }
        
        // Display full name
        alert(`Full Name: ${firstName} ${lastName}`);
        
        // Optional: Reset the form
        form.reset();
    });
});