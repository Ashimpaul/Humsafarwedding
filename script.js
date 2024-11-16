
  // Hero Slider functionality
  const heroSlides = document.querySelectorAll('#hero-slider > div');
  let currentHeroSlide = 0;

  // Rename this function to showHeroSlide to avoid conflict
  function showHeroSlide(index) {
     heroSlides.forEach((slide, i) => {
         slide.style.opacity = i === index ? '1' : '0';
     });
  }

  setInterval(() => {
     currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
     showHeroSlide(currentHeroSlide);
  }, 5000); // 5 seconds interval for the hero slider

  
  // Carousel Slider functionality
  let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  const totalItems = items.length;

  // Show the current carousel item
  function showCarouselSlide(index) {
    items.forEach((item, i) => {
      item.classList.add('hidden');
      if (i === index) {
        item.classList.remove('hidden');
      }
    });
  }

  // Show the next carousel slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    showCarouselSlide(currentIndex);
  }

  // Show the previous carousel slide
  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showCarouselSlide(currentIndex);
  }

  // Initial setup for carousel
  showCarouselSlide(currentIndex);

  // Event listeners for carousel controls
  document.getElementById('next').addEventListener('click', nextSlide);
  document.getElementById('prev').addEventListener('click', prevSlide);

  document.getElementById('contactForm').addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Retrieve form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };

    // Log the data to the console
    console.log('Form Data:', formData);

    // Clear the form (optional)
    this.reset();

    // Provide user feedback
    alert('Message Sent!');
});

