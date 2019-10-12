'use strict';

$(document).ready(function () {

  function expandTechList() {
    $('.project-img').click((e) => {
      $(e.currentTarget).siblings('.tech').find('.tech-list').toggleClass('hidden');
      $(e.currentTarget).siblings('.tech').find('.more-button').toggleClass('hidden');
      collapseLearnMore();
    });
  }

  function expandLearnMore() {
    $('.tech').on('click', '.more-button', (e) => {
      $(e.currentTarget).next('.tech-list').removeClass('hidden');
      $(e.currentTarget).addClass('hidden');
      collapseLearnMore();
    });
  }

  function collapseLearnMore() {
    $('.less-button').on('click', (e) => {
      $(e.currentTarget).parent().addClass('hidden');
      $(e.currentTarget).closest('.tech-list').prev().removeClass('hidden');
      expandLearnMore();
    });
  }

  function onClickHamburgerMenu() {
    $('.hamburger').on('click', () => {
      $('.mobileNav').toggleClass('hidden');
    });
  }

  function onViewportResize() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 768) {
      $('.mobileNav').addClass('hidden');
    }
  }

  function onClickNavLink(link, anchor, offset) {
    $(link).click(() => {
      $('html, body').animate({
        scrollTop: ($(anchor).offset().top - offset)
      }, 1000);
      $('.mobileNav').addClass('hidden');
    });
  }

  $(window).resize(onViewportResize);
  $(expandTechList);
  $(expandLearnMore);
  $(onClickHamburgerMenu);
  $(onClickNavLink('.home-link', 'html', 0));
  $(onClickNavLink('.about-me-link', '#about-me-anchor', 80));
  $(onClickNavLink('.projects-link', '#projects-anchor', 80));
  $(onClickNavLink('.contact-section-link', '.contact', 0));

});