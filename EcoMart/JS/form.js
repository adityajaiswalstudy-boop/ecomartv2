const form = document.querySelector('form');

// 2. Select the input fields by their 'name' attribute
const nameInput = document.querySelector('input[name="visitor_name"]');
const emailInput = document.querySelector('input[name="visitor_email"]');
const messageInput = document.querySelector('textarea[name="visitor_message"]');

// 3. Make them required via JavaScript so they can't be empty
nameInput.required = true;
emailInput.required = true;
messageInput.required = true;

// 4. Handle the submission
form.addEventListener('submit', function(event) {
    // Prevent the page from reloading/submitting to '#'
    event.preventDefault();

    // Grab the name to personalize the message
    const name = nameInput.value.trim();

    // Check if fields are actually filled (extra safety)
    if (name !== "" && emailInput.value.trim() !== "" && messageInput.value.trim() !== "") {
        alert("Thanks for your feedback, " + name + "!");
        
        // Clear the form fields after submission
        form.reset();
    } else {
        alert("Please fill out all fields before submitting.");
    }
});