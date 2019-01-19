
$(function() {
  //Simple filter controls
  $('.simplefilter li').click(function() {
    $('.simplefilter li').removeClass('active');
    $(this).addClass('active');
  });
  //Multifilter controls
  $('.multifilter li').click(function() {
    $(this).toggleClass('active');
  });
  //Shuffle control
  $('.shuffle-btn').click(function() {
    $('.sort-btn').removeClass('active');
  });
  //Sort controls
  $('.sort-btn').click(function() {
    $('.sort-btn').removeClass('active');
    $(this).addClass('active');
  });
});

 $(function() {
        var f = $('.filtr-container').filterizr({ controlsSelector: '.fltr-controls' });
        $('.color-container-1').filterizr({ controlsSelector: '.color-controls-1' });
        $('.color-container-2').filterizr({ controlsSelector: '.color-controls-2', layout: 'packed' });
        $('.color-container-3').filterizr({ controlsSelector: '.color-controls-3', layout: 'sameHeight' });
        $('.color-container-4').filterizr({ controlsSelector: '.color-controls-4', layout: 'packed' });
        $('.color-container-5').filterizr({ controlsSelector: '.color-controls-5', layout: 'horizontal' });
        $('.color-container-6').filterizr({ controlsSelector: '.color-controls-6', layout: 'vertical' });
        window.filterizr = f;
      });