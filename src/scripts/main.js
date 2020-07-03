'use strict';

$(document).ready(function() {
  let i = 1;

  $('.nav__togler').click(function() {
    if (i % 2) {
      $('.nav__list').css({ 'display': 'flex' });
      $('.header__title').css({ 'display': 'none' });
      $('.header__text').css({ 'display': 'none' });
    } else {
      $('.nav__list').css({ 'display': 'none' });
      $('.header__title').css({ 'display': 'block' });
      $('.header__text').css({ 'display': 'block' });
    }
    i++;
  });

  $('.nav__list').click(function(e) {
    if (e.target.nodeName === 'A') {
      $('.nav__list').css({ 'display': 'none' });
      $('.header__title').css({ 'display': 'block' });
      $('.header__text').css({ 'display': 'block' });
    }
  });
});
