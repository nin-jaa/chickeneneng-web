function openLightbox(imageSrc) {
    document.getElementById("lightbox-image").src = imageSrc; // Set the image source
    document.getElementById("lightbox").style.display = "flex"; // Show the lightbox
  }
  
  // Close lightbox
  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }
  
  
  // Show the button when the user scrolls down 20px from the top
  window.onscroll = function() {
      toggleBackToTopBtn();
  };
  
  function toggleBackToTopBtn() {
      const backToTopBtn = document.getElementById("backToTopBtn");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          backToTopBtn.style.display = "block";
      } else {
          backToTopBtn.style.display = "none";
      }
  }
  
  // Smooth scroll back to the top when button is clicked
  function scrollToTop() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  }
  
  
    /* Show the button when scrolling down */
  window.onscroll = function() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block"; /* Show button */
    } else {
        backToTopBtn.style.display = "none"; /* Hide button */
    }
  };
  
  function openSidebar() {
    document.getElementById("sidebar").classList.add("open");
  }
  
  function closeSidebar() {
    document.getElementById("sidebar").classList.remove("open");
  }
  
  
  
  let slideIndex = 1;
  let slideInterval; // Declare the interval variable
  showSlides(slideIndex);
  
  // Function to start the automatic slideshow
  function startSlideshow() {
      slideInterval = setInterval(() => {
          showSlides(slideIndex += 1); // Move to the next slide
      }, 5000); // Change slide every 5 seconds (5000 milliseconds)
  }
  
  // Start the slideshow
  startSlideshow();
  
  // Next/previous controls
  function plusSlides(n) {
      clearInterval(slideInterval); // Clear the existing interval
      showSlides(slideIndex += n); // Show the next or previous slide
      startSlideshow(); // Restart the slideshow timer
  }
  
  // Show the current slide
  function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlider");
      
      // Check if there are any slides
      if (slides.length === 0) {
          console.error("No slides found with the class 'mySlider'.");
          return; // Exit the function if no slides are found
      }
  
      // Wrap around the slide index
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
  
      // Hide all slides
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
  
      // Show the current slide
      slides[slideIndex - 1].style.display = "block";  
  }
  
  
  document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get form data
    const contactType = document.getElementById("contactType").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Log the data (you can replace this with an actual submission to a server)
    console.log("Contact Type:", contactType);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  
    // Optionally, reset the form
    document.getElementById("contactForm").reset(); // Reset the form fields
  });
  
  
  // Function to filter menu items based on category
  function filterMenu() {
    const category = document.getElementById("category").value;
    const foodCategory = document.querySelector('.food-category');
    const beverageCategory = document.querySelector('.beverage-category');
  
    if (category === "all") {
        foodCategory.style.display = "block"; // Show food category
        beverageCategory.style.display = "block"; // Show beverage category
    } else if (category === "food") {
        foodCategory.style.display = "block"; // Show food category
        beverageCategory.style.display = "none"; // Hide beverage category
    } else if (category === "beverages") {
        foodCategory.style.display = "none"; // Hide food category
        beverageCategory.style.display = "block"; // Show beverage category
    }
  }
  
  // Function to filter menu items based on price
  function filterPrice() {
    const priceRange = document.getElementById("price").value;
    const menuItems = document.querySelectorAll('.menu-item');
  
    menuItems.forEach(item => {
        const price = parseFloat(item.getAttribute('data-price'));
  
        if (priceRange === "all") {
            item.style.display = "block"; // Show all items
        } else if (priceRange === "low" && price < 10) {
            item.style.display = "block"; // Show low-priced items
        } else if (priceRange === "medium" && price >= 10 && price <= 20) {
            item.style.display = "block"; // Show medium-priced items
        } else if (priceRange === "high" && price > 20) {
            item.style.display = "block"; // Show high-priced items
        } else {
            item.style.display = "none"; // Hide items that don't match the filter
        }
    });
  }
  
  // Call filterMenu on page load to show the default category
  window.onload = function() {
    filterMenu(); // Show all items by default
  };
  
  
  
  
  