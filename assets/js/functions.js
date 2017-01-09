// when the DOM is done loading...

$(document).ready(function () {

  // hides the loading spinner after the DOM finished loading
  $('body .spinner p').text('Done');
  setTimeout(function () {
    $('body .loader').fadeOut();
  }, 500);

  // removes the overflow hidden property of the body
  $('body').removeClass('noOverFlow');

  // animateCss automated class add and class removal
  $.fn.extend({
    animateCss: function (animationName) {
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      this.addClass('animated ' + animationName).one(animationEnd, function () {
        $(this).removeClass('animated ' + animationName);
      });
    }
  });

  // here goes onload animations
  $('h1.intro_hello').addClass('is-visible animated fadeInDown');

  setTimeout(function () {
    $('h2.intro_headline').addClass('is-visible animated zoomIn');
  }, 500);

  setTimeout(function () {
    $('#about-section ._hr, #about-section .small_p,#about-section .intro_btn').addClass('is-visible animated fadeIn')
    $('.intro_hello').removeClass('animated fadeInDown')
    $('.intro_btn').removeClass('fadeIn').addClass('fadeIn infinite');
  }, 1000);

  $('.intro_btn').hover(function(){
    $(this).removeClass('fadeIn infinite')
  });

  // navigation scrolling function
  $('.pri-nav header nav ul a, .pri-nav .mobile-nav a, #about-section .col-2 a').click(function(e) {
    e.preventDefault();
    var sectionID = e.currentTarget.id + "-section";

    $('html body').animate({
      scrollTop: $("#" + sectionID).offset().top
    }, 1000);
  });

  // OnScroll Animations
  $(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    var wHeight = $(this).height() / 2; // Adds on scroll animations when the element reaches half of the window
    var designPos = $('#design-section').offset().top - wHeight;
    var codingPos = $('#coding-section').offset().top - wHeight;
    var youtubePos = $('#youtube-section').offset().top - wHeight;
    var gebeyaPos = $('#gebeya-section').offset().top - wHeight;
    // var formPos = $('#form-section').offset().top - wHeight;
    var contactPos = $('#contact-section').offset().top - wHeight;

    // turns the header to more opaque when the window is scrolled above 70px
    if (wScroll > 70) {
      $('.header-container').addClass('is-opaque');
    } else {
      $('.header-container').removeClass('is-opaque');
    }

    // codes thet make contents appear and animate
    if (wScroll > designPos) {
      $('#design-section .devices').addClass('is-visible animated fadeIn')
      $('#design-section p,#design-section .cta-btn').addClass('is-visible animated fadeIn');
    }

    if (wScroll > codingPos) {
      $('.code-window').addClass('is-visible animated fadeIn');
      $('.code-cursor').addClass('animated infinite flash');
      $('#coding-section p,#coding-section .cta-btn').addClass('is-visible animated fadeInLeft');
    }

    if (wScroll > youtubePos) {
      $('.yt-video').addClass('is-visible animated fadeInUp');
      $('#youtube-section p,#youtube-section .cta-btn').addClass('is-visible animated fadeIn');
    }

    if (wScroll > gebeyaPos) {
      $('#gebeya-section .gebeya-logo').addClass('is-visible animated flipInY');
      $('#gebeya-section p').addClass('is-visible animated fadeInLeft');
    }

    if (wScroll > contactPos - 200) {
      $('#contact-section .big-email').addClass('is-visible animated fadeIn');
      setTimeout(function() {
        $('.social-links').addClass('is-visible animated fadeInDown')
      }, 400);
    }

  });

  // OnClick Animations ###############################################################################################
  $('.burger-menu').on('click', function () { // Mobile nav toggle functionality
      // hides the mobile nav if it is already shown
      $(this).toggleClass('is-pressed');
      $('.mobile-nav').toggleClass('is-open animated slideInDown');
  });
  // removes the mobile-nav on home-sections click
  $('.mobile-nav li, body .home-sections, body .flatpage').on('click', function () {
    $('.burger-menu').removeClass('is-pressed');
    $('.mobile-nav').removeClass('is-open animated slideInDown');
  });

  // some cool onclick animations
  $('#coding-section .code-window').on('click', function () {
    $(this).animateCss('hinge')
  });

  $('#about-section .hero').on('click', function(){
    $(this).toggleClass('largeHero zoomIn');
  });

  // -----------------------------------------------------------------------


});
