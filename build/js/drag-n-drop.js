$(document).ready(function(){
  const makeDraggable = function(elem) {
    elem.draggable({
      containment: "#makeOrder",
      cursor: "pointer",
      revert: true,
      revertDuration: 200
    })
  }

  const createProgrammeItem = function(name, placetype){
    let elem = $(`<li class="programme__item" data-placetype="${placetype}"></li>`);

    elem.append($(`<img class="programme__item-icon programme__item-icon--${placetype}" src="img/ic-${placetype}.png""/>`));
    elem.append($(`<h3 class="programme__item-title">${name}</h3>`));
    elem.append($('<span class="programme__item-time">03.30 - 09.00</span>'));
    // console.log(elem);
    // console.log(elem);
    return elem;
  }

  const createCatalogItem = function(name, placetype){

    let elem = $(`<li class="catalog__item" data-placetype="${placetype}"></li>`);
    let title_wrapper = $('<div class="catalog__item-title-wrapper"></div>');
    let details_wrapper = $('<div class="catalog__details-wrapper"></div>');

    title_wrapper.append($(`<h4 class="catalog__item-title">${name}</h4>`))
    title_wrapper.append($('<span class="catalog__time">estimated time: <span class="dark-turquoise">3 hours</span></span>'));

    details_wrapper.append($(`<img class="catalog__icon catalog__icon--${placetype}" src="img/ic-${placetype}.png"/>`))
    details_wrapper.append($('<a class="catalog__details" href="#">view details</a>'));

    elem.append(title_wrapper);
    elem.append(details_wrapper);

    return elem;
  }

  // Check if list from which draggable taken is empty — and need to have empty place
  const isSourceEmpty = function(source){
    if (source.find('.catalog__item, .programme__item').length == 1) return true;
    return false;
  }

  // Create empty place in list
  const createEmptyItem = function(class_){
    let elem = $(`<li class="${class_} ${class_}--empty"></li>`);
    let here_or_back = class_ == 'programme__item' ? 'here' : 'back';
    elem.append(`<span class="${class_}-empty-span">Drag destination ${here_or_back}</span>`);
    return elem;
  }

  const extractItemClass = function(elem){
    let classList = $(elem).attr('class').split(' ');
    return classList.filter(c => c.includes('__item'))[0];
  }

  // START — making catalog items draggable
  makeDraggable($('.catalog__item'));

  // MAIN
  $('.programme__list, .catalog__list').droppable({
    hoverClass: 'hovered',
    accept: function(draggable){
      draggable = draggable[0];
      var droppable = this;
      return !$.contains(droppable, draggable);
    },
    drop: function(event, ui) {

      let draggable = ui.draggable[0];
      let draggable_class = extractItemClass(draggable)
      let parent = $(draggable).parent();
      let droppable_class = $(this).attr('class').split(' ').filter(s => s.includes('__list'))[0];
      let name = $(draggable).find($('.programme__item-title, .catalog__item-title')).text();
      let placetype = $(draggable).data('placetype');
      let new_elem;

      if (droppable_class == 'programme__list') {
        new_elem = createProgrammeItem(name, placetype);
      } else {
        new_elem = createCatalogItem(name, placetype)
      }

      $(this).append(new_elem);
      makeDraggable(new_elem);

      if (isSourceEmpty(parent)) {
        $(parent).append(createEmptyItem(draggable_class))
      }

      $(this).find(".programme__item--empty, .catalog__item--empty").remove();
      $(draggable).remove();
    }
  })
})
