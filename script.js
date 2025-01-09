//for promo
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    lightboxImage.src = imageSrc; // Set the image source
    lightbox.style.display = 'flex'; // Show the lightbox
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none'; // Hide the lightbox
}
//for gallery
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
  
// menu
// Get the lightbox container and content elements
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const closeBtn = document.getElementById('close-lightbox');

// Function to open the lightbox
function openLightbox(src) {
    lightbox.style.display = 'flex'; // Show the lightbox
    lightboxContent.src = src; // Set the image source
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none'; // Hide the lightbox
}

// Add event listener to the close button
closeBtn.addEventListener('click', closeLightbox);

// Add event listener to the lightbox container to close when clicked outside the content
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

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
  
  
  