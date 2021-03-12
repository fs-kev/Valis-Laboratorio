
// Carousel

new Splide('.splide', {
    'type': 'loop',
    'autoplay': true,
    'interval': 2600,
    'speed': 950,
    'cover': true,
    'heightRatio': 0.3,
    'arrow': false,
    'direction': 'ttb'
}).mount();

// Scroll reveal

ScrollReveal().reveal(".footer");
ScrollReveal().reveal(".row");
ScrollReveal().reveal(".banner");
ScrollReveal().reveal(".banner2");
ScrollReveal().reveal(".splide",{'delay': 400});

