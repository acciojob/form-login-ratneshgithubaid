document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('nameForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        
        // Get form values
        const firstName = document.getElementById('fname').value.trim();
        const lastName = document.getElementById('lname').value.trim();
        
        // Check if both fields are filled
        if (!firstName || !lastName) {
            alert('Please fill in both first and last name fields');
            return;
        }
        
        // Display full name
        alert(`${firstName} ${lastName}`);
        
        // Optional: Reset the form after submission
        form.reset();
    });
});