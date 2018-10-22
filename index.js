
'use strict';

$(document).ready(function() {

  //expand project details from project thumbnail
  $(listenExpand);

  function listenExpand() {
    $('.project-img').click((e) => {
      $(e.currentTarget).siblings('.tech').find('.tech-list').toggleClass('hidden');
      $(e.currentTarget).siblings('.tech').find('.more-button').toggleClass('hidden');
      listenCollapse();
    });
  }

  //expand and collapse project details from `Learn More` button
  $(listenExpand2);

  function listenExpand2() {
    $('.tech').on('click', '.more-button', function (e) {
      $(e.currentTarget).next('.tech-list').removeClass('hidden');
      $(e.currentTarget).addClass('hidden');
      listenCollapse();
    });
  }

  function listenCollapse() {
    $('.less-button').click((e) => {
      $(e.currentTarget).parent().addClass('hidden');
      $(e.currentTarget).closest('.tech-list').prev().removeClass('hidden');
      listenExpand2();
    });
  }

	// scroll on navbar links
  $('#home-link').click(() => {
    $('html, body').animate({
      scrollTop: ($('html').offset().top)
    },1000);
  });

  $('#about-me-link').click(() => {
    $('html, body').animate({
      scrollTop: ($('#about-me-anchor').offset().top - 80)
    },1000);
  });

  $('#projects-link').click(() => {
    $('html, body').animate({
      scrollTop: ($('#projects-anchor').offset().top - 80)
    },1000);
  });

  $('#contact-link').click(() => {
    $('html, body').animate({
      scrollTop: ($('.contact').offset().top)
    },1000);
  });

});