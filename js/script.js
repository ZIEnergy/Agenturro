$(document).ready(function() {
  $('.projects__slider').slick({
    dots: true,
    slidesToShow: 1,
  });

  $('.portfolio__content').slick({
    variableWidth: true,
    responsive: [
      {
        breakpoint: 567,
        settings: {
          variableWidth: false,
          slidesToShow: 3
        }
      }
    ]
  });

  $(window).scroll(function() {
    if (($(window).scrollTop() >= 50)) {
      $('.sticky-header').fadeIn().css('display', 'flex');
    }
    else if (($(window).scrollTop() <50)) {
      $('.sticky-header').fadeOut();
    }
  });
  
  $('a').click(function(){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
  });
  
  $(".fancybox").fancybox({
    helpers:  {
        title	: { type : 'outside' },
        thumbs	: {
          width	: 100,
          height	: 100
        }
    },
  });

  $(".form-upload__dragndrop").dropzone({ 
    url: "/file/post",
    uploadMultiple: true,
    createImageThumbnails: false
  });
  Dropzone.autoDiscover = false;
  
});
