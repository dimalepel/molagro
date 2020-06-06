(function () {
  // Плавный скролл
  function smoothScrolling(element) {
    $(element).on( 'click', function(){
      let el = $(this);
      let dest = el.attr('href');
      if(dest !== undefined && dest !== '') {
        $('html').animate({
            scrollTop: $(dest).offset().top
          }, 500
        );
      }
      return false;
    });
  }
  smoothScrolling('.promo__calculate');
  // Модальное окно
  function modalActive(element) {
    $(element).on( 'click', function(){
      let el = $(this);
      let dest = el.attr('href');
      $(dest).addClass('show');
      $('body').css('overflow', 'hidden');
      return false;
    });
    $('#modal-close').on( 'click', function(){
      $(this).parents($(element).attr('href')).removeClass('show');
      $('body').css('overflow', '');
    });
    $('html').keydown(function (event) {
      if (event.keyCode == 27) {
        $('.modal__overlay').removeClass('show');
        $('body').css('overflow', '');
      }
    });
  }
  modalActive('.modal-trigger');
  // Яндекс карта
  function yandexMap(element, coords) {
    let map = $(element);
    ymaps.ready(init);
    function init() {
      var center = coords;
      var elamarMap = new ymaps.Map('map', {
        center: center,
        zoom: 17,
        controls: []
      });
      var elamarPlacemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: window.location.protocol + '//' + window.location.host + '/images/hint-map.png',
        iconImageSize: [75, 79],
        iconImageOffset: [-37, -65]
      });
      elamarMap.geoObjects.add(elamarPlacemark);
    }
  }
  yandexMap('#map', [54.3091,26.8597]);
  // Мобильное меню - Открыть
  function openAside(trigger, destination) {
    $(trigger).on( 'click', function(){
      $(destination).addClass('show');
    });
  }
  openAside('.menu-trigger', '.aside')
  // Мобильное меню - Закрыть
  function closeAside(trigger, destination) {
    $(trigger).on( 'click', function(){
      $(destination).removeClass('show');
    });
  }
  closeAside('.aside__close', '.aside')
})();
