$(document).ready(function(){

  $.each($('.programme__item-icon, .catalog__icon'), function(){
    if ($(this).data('type') === 'city') {
      $(this).css({
        'width': '34px',
        'height': '33px'
      })
    }
  })

  $(window).on('click', function(){
    // let window_size = window.matchMedia('(min-width: 768px)');
    // console.log(window_size.matches);
    // if (window_size.matches) {
    //   $('.features__desc-icon-wrapper').removeClass('visually-hidden');
    //   $('.features__item').removeClass('visually-hidden');
    // }
    $.each($('.features__img-wrapper'), function(){
      console.log($(this).height());
    })
  });

})
