document.addEventListener('DOMContentLoaded', () => {
    // Selecting all navbar elements with the 'border' class
    const navItems = document.querySelectorAll('.navbar .border');

    navItems.forEach(item => {
        // Initial styles
        item.style.transition = "transform 0.2s ease";
        item.style.display = "inline-block";

        item.onmouseenter = function() {
            // Enlarge items while excluding EcoMart name and logo
            if (!this.classList.contains('nav-logo') && !this.classList.contains('Name')) {
                this.style.transform = "scale(1.30)";
                this.style.cursor = "pointer";
            }
        };

        item.onmouseleave = function() {
            // Return to original size
            this.style.transform = "scale(1)";
        };
    });

});

//to link this script to html files use the <script> tag and add this file's name in the src just before where the <body> tag closes



  const minusBtn = document.querySelector(".qty-btn.minus");
  const plusBtn = document.querySelector(".qty-btn.plus");
  const qtyValue = document.getElementById("qty-value");

  let quantity = 1;

  plusBtn.addEventListener("click", () => {
    quantity++;
    qtyValue.textContent = quantity;
  });

  minusBtn.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      qtyValue.textContent = quantity;
    }
  });




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



