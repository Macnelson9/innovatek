'use strict';

// Selected elements
const openBtn = document.getElementById('hamburger');
const closeBtn = document.getElementById('close');
const mobileNav = document.querySelector('.mobile-nav')

openBtn.addEventListener('click', function () {
    mobileNav.classList.add('active');
})

closeBtn.addEventListener('click', function () {
    mobileNav.classList.remove('active');
})

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

// document.addEventListener('DOMContentLoaded', function () {
//  Map feature
//     const map = L.map('map').setView([37.7749, -122.4194], 13);

//     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map);

//     L.marker([37.7749, -122.4194]).addTo(map)
//     .bindPopup('Innovatek lives Here!')
//     .openPopup();
// })