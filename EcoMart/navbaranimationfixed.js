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




const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.hero-slide');

let index = 0;

setInterval(() => {
  index = (index + 1) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}, 3000);



//to link this script to html files use the <script> tag and add this file's name in the src just before where the <body> tag closes