
'use strict';

$(document).ready(function() {


  //expand and collapse project details
  $(listenExpand);

  function listenExpand() {
    $('.tech').on('click', '.more-button', function (event) {
      $(event.currentTarget).next('.tech-list').removeClass('hidden');
      $(event.currentTarget).addClass('hidden');
      listenCollapse();
    });
  }

  function listenCollapse() {
    $('.less-button').click((e) => {
      $(e.currentTarget).parent().addClass('hidden');
      $(e.currentTarget).closest('.tech-list').prev().removeClass('hidden');
      listenExpand();
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
      scrollTop: ($('#contact').offset().top)
    },1000);
  });

});