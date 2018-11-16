// button links
function btn() {
      alert("Coming Soon");
    
}

// Navigation Menu
  document.querySelector('.nav-menu').addEventListener("click", addRotate);
 
 function addRotate(e){
       const navMenu = document.querySelector('.nav-menu');
       const mobileMenu = document.querySelector('.mobile-menu');
       navMenu.classList.toggle('rotate');
       mobileMenu.classList.toggle('active');
 
 }

 //Scroll Reveal
      window.sr = ScrollReveal();
      sr.reveal('.header-menu',{
            duration: 3000,
            origin: 'top',
            distance: '100px'
            
      });
      sr.reveal('.logo',{
            duration: 3000,
            origin: 'bottom',
            distance: '100px'
            
      });
      sr.reveal('.info',{
            duration: 3000,
            origin: 'left',
            distance: '200px'
      });
      sr.reveal('.background-img',{
            duration: 3000,
            origin: 'right',
            distance: '300px'
      });
      sr.reveal('.title',{
            duration: 2000,
            origin: 'bottom',
            viewFactor:'0.3'
      });
      sr.reveal('.blog-title',{
            duration: 2000,
            origin: 'bottom',
            viewFactor:'0.3'
      });
      sr.reveal('.large-title',{
            duration: 2000,
            origin: 'right',
            distance: '50px',
            viewFactor:'0.3'
      });

//Naviagtion Transition


