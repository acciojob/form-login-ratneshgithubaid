function getFormvalue(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get trimmed values
    const firstName = document.getElementById("fname").value.trim();
    const lastName = document.getElementById("lname").value.trim();

    // Check for empty inputs
    if (firstName === "" && lastName === "") {
        alert("Please enter your name.");
    } else {
        alert(`${firstName} ${lastName}`.trim());
    }
}
