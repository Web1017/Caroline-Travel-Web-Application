 //SideNav
 const sideNav = document.querySelector('.sidenav');
 M.Sidenav.init(sideNav, {});

 //Slider Initialization
 const slider = document.querySelector('.slider');
 M.Slider.init(slider, {
   indicators: false,
   height: 500,
   transition: 200,
   interval: 6000
 });


 // Material Boxed
 const mb = document.querySelectorAll('.materialboxed');
 M.Materialbox.init(mb, {});

 //ScrollSpy 
 const scrollSpy = document.querySelectorAll('.scrollspy');
 M.ScrollSpy.init(scrollSpy, {});


 // New menu Nav 
 /*const menuToggle = document.querySelector('.toggle')
 const showcase = document.querySelector('.showcase')

 menuToggle.addEventListener('click', () => {
   menuToggle.classList.toggle('active');
   showcase.classList.toggle('active');
 })  */

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




v
