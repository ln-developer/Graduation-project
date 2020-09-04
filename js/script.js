$(document).ready(function(){

    // NAVIGATION

    $('nav a').on('click', function(event){
      event.preventDefault();

      let href = $(this).attr('href');
      let height = 30;
      let offset = $(href).offset().top - height;

      $('body,html').animate({
        scrollTop: offset,
      }, 700);
    });

    $('.to-top').on('click', function(event){
      event.preventDefault();

      $('body,html').animate({
        scrollTop: 0,
      }, 700);
    });

    // SWIPER

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper__button_next',
          prevEl: '.swiper__button_prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        breakpoints: {
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },

          480: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 1,
            
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1,
          }
        }
      });
    
    // PARALLAX

    $('.parallax__list>li').addClass('layer');
    $('.parallax__list').parallax();

    // MENU

    $('.menu-burger_header_mobile').on('click', function(event){
        $('.main-menu_header_mobile').addClass('menu_showed');
        $('html').addClass('llock');
    });

    $('.main-menu__button_exit').on('click', function(){
        $('.main-menu_header_mobile').removeClass('menu_showed');
        $('html').removeClass('llock');
    });

    $('.menu__link_mobile').on('click', function(){
        $('.main-menu_header_mobile').removeClass('menu_showed');
        $('html').removeClass('llock');
    });

    // POPUP&&POPUP-GRADITUDE  

    function popupClose() {
      $('.popup__input').removeClass('error');
      $('.popup').removeClass('popup_show');
      $('.popup__input').val('');
    }

    function popupGraditudeOpen() {
      $('.popup-graditude').addClass('popup-graditude_show');
      setTimeout(function(){
        $('html').removeClass('llock');
        $('.popup-graditude').removeClass('popup-graditude_show');
      }, 2000);
    }

    // POPUP-CALL

    $('.popup_call_open').on('click', function(){
        $('.popup_call').addClass('popup_show');
        $('html').addClass('llock');
    });

    $('.popup__button_exit_call').on('click', function(){
        $('.popup_call').removeClass('popup_show');
        $('.popup__input').removeClass('error');
        $('.popup__input').val('');
        $('html').removeClass('llock');
    });

    function popupOrderCall() {
      let nameCall = $('#popup__input_name_call').val(),
          telCall = $('#popup__input_tel_call').val();

      if (nameCall.length !== 0 && telCall.length == 16){
          popupClose();
      }

      else if (nameCall.length == 0 && telCall.length == 16){
          $('#popup__input_name_call').addClass('error');
          return false;
      }
  
      else if (nameCall.length !== 0 && telCall.length !== 16){
          $('#popup__input_tel_call').addClass('error').val('');
          return false;
      }
  
      else {
          $('.popup__input').addClass('error');
          setTimeout(function(){
            $('.popup__input').removeClass('error');
          }, 1500);
          return false;
      }

      popupGraditudeOpen();
    }

    $('.popup__input_send_call').on('click', popupOrderCall);

    //POPUP-ORDER

    $('.popup_order_open').on('click', function(){
        $('.popup_order').addClass('popup_show');
        $('html').addClass('llock');
    });

    $('.popup__button_exit_order').on('click', function(){
        $('.popup_order').removeClass('popup_show');
        $('.popup__input').removeClass('error');
        $('.popup__input').val('');
        $('html').removeClass('llock');
    });

    function popupOrderOrder() {
      let nameOrder = $('#popup__input_name_order').val(),
          telOrder = $('#popup__input_tel_order').val(),
          email = $('#popup__input_email').val();

      if (nameOrder.length !== 0 && telOrder.length == 16 && email.length !== 0){
          popupClose();
      }

      else if (nameOrder.length == 0 && telOrder.length == 16 && email.length !== 0){
          $('#popup__input_name_order').addClass('error');
          return false;
      }
  
      else if (nameOrder.length !== 0 && telOrder.length !== 16 && email.length !== 0){
          $('#popup__input_tel_order').addClass('error').val('');
          return false;
      }

      else if (nameOrder.length !== 0 && telOrder.length == 16 && email.length == 0){
        $('#popup__input_email').addClass('error');
        return false;
      }

      else if (nameOrder.length == 0 && telOrder.length !== 16 && email.length !== 0){
          $('#popup__input_tel_order').addClass('error').val('');
          $('#popup__input_name_order').addClass('error');
          return false;
      }

      else if (nameOrder.length !== 0 && telOrder.length !== 16 && email.length == 0){
        $('#popup__input_tel_order').addClass('error').val('');
        $('#popup__input_email').addClass('error');
        return false;
      }

      else if (nameOrder.length == 0 && telOrder.length == 16 && email.length == 0){
          $('#popup__input_name_order').addClass('error');
          $('#popup__input_email').addClass('error');
          return false;
      }
  
      else {
          $('.popup__input').addClass('error');
          setTimeout(function(){
            $('.popup__input').removeClass('error');
          }, 1500);
          return false;
      }

      popupGraditudeOpen();
    }

    $('.popup__input_send_order').on('click', popupOrderOrder);

    // TEL-MASK

    $(function() {
      $('.tel-mask').mask('+7(000)000-00-00');
    });
});
