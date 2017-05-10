$(document).ready(function() {
   $('.main-nav').hide();
   $('.jumbotron').hide();
   //$('.footer').hide();
   $('.scroll-up').hide();   

   $('.main-nav').slideDown(800);
   $('.jumbotron').fadeIn(1000);
   //$('.footer').fadeIn(3000);
   $(window).scroll(function() {
      if ($(window).width() > 1200) {
         if ($(window).height() <= $(window).scrollTop()) {
            $('.scroll-up').fadeIn(500);
         } else {
            $('.scroll-up').fadeOut(500);
         }
      }
   });
});