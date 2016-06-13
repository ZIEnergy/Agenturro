$(document).ready(function() {
  $('.projects__slider').slick({
    dots: true,
    slidesToShow: 1,
  });

  $('.portfolio__content').slick({
    variableWidth: true
  });

  $(window).scroll(function() {
    if (($(window).scrollTop() >= 50)) {
      $('.sticky-header').fadeIn().css('display', 'flex');
    }
    else if (($(window).scrollTop() <50)) {
      $('.sticky-header').fadeOut();
    }
  });

  $(".form-upload__dragndrop").dropzone({ 
    url: "/file/post",
    uploadMultiple: true,
    createImageThumbnails: false
  });
  Dropzone.autoDiscover = false;
  
});
