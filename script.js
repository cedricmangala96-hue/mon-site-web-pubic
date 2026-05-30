
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");
  
    loader.classList.add("loader--hidden");
  
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  });






$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Dévéloppeur web full-stack", "Analyste concepteur", " Et modélisation de SGBD ", "Avec SQL Server et MySQL", "Analyste logiciel système", "Et dépannage Hardware", "Formateur"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Site web profféssionnel", "Site web personnel (pour usage unique & personnel)", "Site web d'entréprise", "Site web pour un magasin (Boutique, dépot)", "Site web journal", "Site web pour une école", "Site web universitaire", "Site web pour une église", "Site web pour un centre médical", "Site web pour ONG", "Site web pour un restaurant", "Site web pour un flat hotel", "Site web publicitaire", "Site vitrine", "Site web pour une agence immobilière", "Site web pour location des véhicules", "Site web pour une agence de voyage", "Application web", "Application mobile", "logiciel de gestion", "plateforme web", "Installation d'un réseau local P2P", "Dépannage d'un logiciel Système(windows & Android)", "Dépannagde des Ordinateurs"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});