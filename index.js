
'use strict';

$(document).ready(function() {

	// scroll on navbar links
  $('#home-link').click(() => {
    $('html, body').animate({
      scrollTop: ($('html').offset().top)
    },1000);
  });

  $('#about-me-link').click(() => {
    $('html, body').animate({
      scrollTop: ($('#about-me-anchor').offset().top - 100)
    },1000);
  });

  $('#projects-link').click(() => {
    $('html, body').animate({
      scrollTop: ($('#projects-anchor').offset().top - 100)
    },1000);
  });

  $('#contact-link').click(() => {
    $('html, body').animate({
      scrollTop: ($('#contact').offset().top)
    },1000);
  });

});