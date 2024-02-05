//Our clients swipper


  
  // Scroll animation
  ScrollReveal({
    reset: true,
    distance: "60px",
    duration: 2500,
    delay: 100,
  });
  
  const revealOptions = {
    delay: 500,
    interval: 200,
  };
  
  // Replace the following with your specific classes and IDs
  ScrollReveal().reveal(
    ".hero-text h1, .hero-text p, .Download-button, .hero-btn2",
    { ...revealOptions, origin: "left" }
  );
  
  ScrollReveal().reveal(
    ".featured_text h1, .featured_text p, .download-button2",
    { ...revealOptions, origin: "right" }
  );
  
  ScrollReveal().reveal(".swiper, .contact-info ", { ...revealOptions, origin: "right" });
  
  ScrollReveal().reveal(".accordion, .blog_main_heading, .subscribe", {
    ...revealOptions,
    origin: "left",
  });
  ScrollReveal().reveal(".featuredimg, .blog-btn,  ", {
    delay: 400,
    origin: "bottom",
  });
  ScrollReveal().reveal(".follow, .second_blog, .hero-image2  ", {
    ...revealOptions,
    origin: "right",
  });
  ScrollReveal().reveal("footer .logo", { delay: 300, origin: "bottom" });
  ScrollReveal().reveal(
    ".main_links, .optional_links, .first_blog, .professional_list ul",
    { delay: 500, origin: "left" }
  );
  
  ScrollReveal().reveal(".about-content p, .copyright p", {
    ...revealOptions,
    origin: "left",
  });
  
  ScrollReveal().reveal(".follow i", { delay: 700, origin: "left" });
  
  // Add more as needed, replacing the selectors and adjusting the options
  