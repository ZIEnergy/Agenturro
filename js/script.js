$(document).ready(function() {
    $('.projects__slider').slick({
      dots: true,
      slidesToShow: 1,
    });
  
    $('.portfolio').slick({
      infinite: true,
      variableWidth: true
    });
  
    $(window).scroll(function() {
      if (($(window).scrollTop() >= 50)) {
        $('.sticky-header').fadeIn('fast').css('display', 'flex');
      }
      else if (($(window).scrollTop() <50)) {
        $('.sticky-header').hide();
      }
    });
  
});
