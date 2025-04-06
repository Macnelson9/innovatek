'use strict';

// Selected elements
const openBtn = document.getElementById('hamburger');
const closeBtn = document.getElementById('close');
const mobileNav = document.querySelector('.mobile-nav')
const loaderContainer = document.querySelector('.loader-container');
const navLinks = document.querySelectorAll('.nav-links a, .mobile-nav-links a');


// Smooth scroll implementation
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Close mobile menu if open
        if (mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
        }

        targetSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
});

openBtn.addEventListener('click', function () {
    mobileNav.classList.add('active');
})

closeBtn.addEventListener('click', function () {
    mobileNav.classList.remove('active');
})

document.addEventListener('DOMContentLoaded', function () {
  loaderContainer.style.display = 'none';

  const lazyImages = document.querySelectorAll("img.lazy");
  const map = L.map('map').setView([37.7749, -122.4194], 14);

  // Lazy loading
  const lazyLoad = (image) => {
    image.src = image.dataset.src;
    image.classList.remove("lazy");
  };
        
  const lazyImageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        lazyLoad(entry.target);
        observer.unobserve(entry.target);
      }
    });
  });
        
  lazyImages.forEach((image) => {
    lazyImageObserver.observe(image);
  });

      //  Map feature
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
    
  L.marker([37.7749, -122.4194]).addTo(map)
    .bindPopup(L.popup({
      maxWidth: 250,
      minWidth: 100,
      keepInView: true,
    }).setContent(`<div style="font-size: 0.9rem"> Innovatek <br/> Right here! <div/>`))
    .openPopup();

});
// document.addEventListener('DOMContentLoaded', function () {
//     gsap.registerPlugin(Flip, ScrollTrigger, ScrollToPlugin, TextPlugin);
    
//     gsap.to(".box", {
//         rotation: 360,
//         duration: 2,
//         scrollTrigger: {
//             trigger: '.box',
//             scrub: true
//         }
//     })
// })