
//ハンバーガーメニュー
$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});

//メインのスライド
$(document).on('ready', function() {
    $(".regular").slick({
      autoplay: true,
      autoplaySpeed: 4000,
      dots: true,
    });
  });

  jQuery(function ($) {
    var fadeIn = $('.fade-in');
    $(window).scroll(function () {
      $(fadeIn).each(function () {
        var offset = $(this).offset().top;
        var scroll = $(window).scrollTop(); 
        var windowHeight = $(window).height();
        if (scroll > offset - windowHeight + 150) {
          $(this).addClass("scroll-in");
        }
      });
    });
  });
  
