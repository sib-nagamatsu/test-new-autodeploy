// gnav
$(function() {
  $('.gnavBtn').on('click', function(evt) {
    evt.preventDefault();
    $(this).toggleClass('active');
    $('.gnavList').stop(true, false).slideToggle(300);
  });
});

// smooth scroll
$(function() {
  $('a[href^="#"]').on('click', function(evt) {
    evt.preventDefault();
    var speed = 500;
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    $('html, body').animate({scrollTop:position}, speed, 'swing');
  });
});