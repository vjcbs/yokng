$(document).ready(function(){

  var menu = document.querySelector('.header__nav-list');
  var menuToggle = document.querySelector('.header__menu-toggle');

  menu.classList.remove('header__nav-list--nojs');

  menuToggle.addEventListener('click', function() {

    if ( menu.classList.contains('header__nav-list--slide-down') ) {
      menu.classList.remove('header__nav-list--slide-down');
      menuToggle.classList.remove('header__menu-toggle--closed');
    }
    else {
      menu.classList.add('header__nav-list--slide-down');
      menuToggle.classList.add('header__menu-toggle--closed');
    }

  });

  // FILTER SWITCH
  $('.features__filter-link').on('click', function(){
    $('.features__filter-link').removeClass('features__filter-link--active');
    $(this).addClass('features__filter-link--active');
  })

  // FILTERING CATALOG
  $('.catalog__filter-select').on('change', function(){
    let filterValue = this.value;

    $.each($('.catalog__item'), function(){
      let item = $(this);
      if (item.data('placetype') != filterValue) {
        item.hide();
      } else {
        item.show();
      }

      if (filterValue == 'none') {
        item.show();
      }
    })

  })
})
