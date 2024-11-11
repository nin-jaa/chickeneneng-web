let slideIndex = 0;
    showSlides();
    setInterval(() => plusSlides(1), 3000); // Change slide every 3 seconds

    function plusSlides(n) {
        slideIndex += n;
        showSlides();
    }

    function showSlides() {
        const slides = document.getElementsByClassName("mySlides");
        if (slideIndex >= slides.length) slideIndex = 0;
        if (slideIndex < 0) slideIndex = slides.length - 1;
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex].style.display = "block";  
    }