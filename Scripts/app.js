
// Material Boxed - Enlarge Images 
 const mb = document.querySelectorAll('.materialboxed');
 M.Materialbox.init(mb, {});

 //ScrollSpy 
 const scrollSpy = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scrollSpy, {});
 

// Animate a Smooth Scrooling
var scroll = new SmoothScroll('a[href*="#" ]', {
    speed: 1000
});




 // Navbar Functionality (Opening & closing)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
 document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
 link.addEventListener('click', () => {
     document.body.classList.remove('nav-open');
 })
})


// Initialize Animate on Scroll - AOS
AOS.init({
    anchorPlacement: 'top-bottom',
    delay: 250,
    once: true,


  });


