$(document).ready(function() {
    $('.projects__slider').slick({
      dots: true,
      slidesToShow: 1,
    });
  
    $('.portfolio').slick({
      infinite: false,
      slidesToShow: 4,
    });
  
    $(window).scroll(function() {
      if (($(window).scrollTop() >= 50)) {
        $('.sticky-header').fadeIn().css('display', 'flex');
      }
      else if (($(window).scrollTop() <50)) {
        $('.sticky-header').fadeOut();
      }
    });
  
});
