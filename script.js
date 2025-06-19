function getFormvalue() {
    // Get form values
    const firstName = document.getElementById('fname').value.trim();
    const lastName = document.getElementById('lname').value.trim();
    
    // Validate inputs
    if (!firstName || !lastName) {
        alert('Please fill in both fields');
        return false; // Prevent form submission
    }
    
    // Show full name
    alert(firstName + ' ' + lastName);
    
    // Prevent default form submission
    return false;
}