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
  
    $(function () {
        $('#fileupload').fileupload({
            dataType: 'json',
            done: function (e, data) {
                $.each(data.result.files, function (index, file) {
                    $('<p/>').text(file.name).appendTo(document.body);
                });
            }
        });
    });
  
});
