document.addEventListener('DOMContentLoaded', (event) => {
    // Cards functionality
    const cardsContainer = document.querySelector(".box");
  
    if (cardsContainer) {
      cardsContainer.addEventListener("click", (e) => {
        const target = e.target.closest(".card");
  
        if (!target) return;
  
        cardsContainer.querySelectorAll(".card").forEach((card) => {
          card.classList.remove("active");
        });
  
        target.classList.add("active");
      });
    }
  
    document.addEventListener('click', function(event) {
      var cards = document.querySelectorAll('.card');
      var clickedOutside = true;
  
      cards.forEach(function(card) {
        if (card.contains(event.target)) {
          clickedOutside = false;
        }
      });
  
      if (clickedOutside) {
        cards.forEach(function(card) {
          card.classList.remove('active');
        });
      }
    });
  
    const cardControllers = document.querySelectorAll("[data-card-controller]");
  
    cardControllers.forEach(controller => {
      controller.addEventListener("click", (e) => {
        const card = e.currentTarget.closest(".card");
        const isVisible = card.dataset.visible;
  
        if (isVisible === "false") {
          card.setAttribute("data-visible", "true");
        } else {
          card.setAttribute("data-visible", "false");
        }
      });
    });
  
    // Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    menuToggle.addEventListener('click', function() {
      menu.classList.toggle('show-menu');
    });
    
    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', function(event) {
      if (!event.target.matches('.menu-toggle, .menu-toggle *')) {
        if (menu.classList.contains('show-menu')) {
          menu.classList.remove('show-menu');
        }
      }
    });
  
    // Close the dropdown menu if the window is resized
    window.addEventListener('resize', function() {
      if (menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu');
      }
    });
  
    // Function to show or hide the offers dropdown based on the topic selected
    document.getElementById('topic').addEventListener('change', function() {
      var offersDropdown = document.getElementById('offersDropdown');
      if (this.value === 'offers') {
        offersDropdown.style.display = 'block';
      } else {
        offersDropdown.style.display = 'none';
      }
    });
  
    // Add click event listeners to each ad link
    document.querySelectorAll('#ads-section a').forEach(function(adLink) {
      adLink.addEventListener('click', function(event) {
        event.preventDefault();
        var offerType = this.getAttribute('data-offer-type');
  
        // Set the topic dropdown to "Offers"
        var topicDropdown = document.getElementById('topic');
        topicDropdown.value = 'offers';
  
        // Show the offers dropdown
        var offersDropdown = document.getElementById('offersDropdown');
        offersDropdown.style.display = 'block';
  
        // Set the offer type dropdown to the respective ad type
        var offerTypeDropdown = document.getElementById('offer-type');
        offerTypeDropdown.value = offerType;
  
        // Scroll to the contact form
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  
  $(document).ready(function() {
    $('#pauseButton').click(function() {
      $("article").toggleClass("paused");
      var buttonText = $(this).text();
      if (buttonText === "Pause") {
        $(this).text("Play");
      } else {
        $(this).text("Pause");
      }
    });
  });
  