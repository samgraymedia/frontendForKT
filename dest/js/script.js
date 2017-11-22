$(document).ready(function() {
  //number counter
  $('.number').each(function() {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 4000,
      easing: 'swing',
      step: function(now) {
        $(this).text(Math.ceil(now));
        var text = $(this).text;
        text = text + "%";
      }
    });
  });


});
