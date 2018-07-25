$(document).ready(function(){

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
