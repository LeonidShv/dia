'use strict';

// $(function(){

  let togglerIndex = 1;
  let caruselIndex = 0;
  let caruselImg = $('.carousel__img');
  let a = $('.a');

  $('.nav__togler').click(function() {
    if (togglerIndex % 2) {
      $('.nav__list').css({ 'display': 'flex' });
      $('.header__title').css({ 'display': 'none' });
      $('.header__text').css({ 'display': 'none' });
    } else {
      $('.nav__list').css({ 'display': 'none' });
      $('.header__title').css({ 'display': 'block' });
      $('.header__text').css({ 'display': 'block' });
    }
    togglerIndex++;
  });

  $('.nav__list').click(function(e) {
    if (e.target.nodeName === 'A') {
      $('.nav__list').css({ 'display': 'none' });
      $('.header__title').css({ 'display': 'block' });
      $('.header__text').css({ 'display': 'block' });
    }
  });

  function showNextSlide(e) {
    e.preventDefault();
    caruselIndex++;
    caruselIndex = caruselIndex >= caruselImg.length ? 0 : caruselIndex;
    showSlide(caruselIndex); 
  }

  function showPrevSlide(e) {
    e.preventDefault();
    caruselIndex--;
    caruselIndex = caruselIndex <= 0 ? caruselImg.length - 1 : caruselIndex;
    showSlide(caruselIndex);    
  }

  function showSlide() {
    caruselImg.removeClass('carousel__img_active');
    caruselImg[caruselIndex].classList.add('carousel__img_active');
  }

  $('.carousel__control_next').click(showNextSlide);

  $('.carousel__control_prev').click(showPrevSlide);
// });

let arr = [1,2,3];
console.log(arr);
 