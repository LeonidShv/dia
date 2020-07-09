'use strict';

$(function(){

  let togglerIndex = 1;
  let caruselIndex = 0;
  const caruselImg = $('.carousel__img');
  const caruselText = $('.carousel__text');
  const carouselTitle = $('.carousel__title');

  const text = {
    title: ['Inspiration', 'Communication', 'Relaxation', 'Coffee break', 'Minimalism'],
    info: [
      'The future belongs to those, who believe in beauty of their dreams',
      'Sportsman do offending supported extremity breakfast by listening.',
      'The process of being feel something, especially to do something creative. ',
      'As so seeing latter he should thirty whence.',
      'Effect if in up no depend seemed.'
    ]
  };

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
    if (e) {
      e.preventDefault();
    }
    
    caruselIndex++;
    caruselIndex = caruselIndex >= caruselImg.length ? 0 : caruselIndex;
    showSlide(caruselIndex); 
  }

  function showPrevSlide(e) {
    e.preventDefault();
    caruselIndex--;
    caruselIndex = caruselIndex < 0 ? caruselImg.length - 1 : caruselIndex;
    showSlide(caruselIndex);    
  }

  function showSlide(caruselIndex) {
    carouselTitle.text(text.title[caruselIndex]);
    caruselText.text(text.info[caruselIndex]);
    caruselImg.removeClass('carousel__img_active');
    caruselImg[caruselIndex].classList.add('carousel__img_active');
  }

  $('.carousel__control_next').click(showNextSlide);
  $('.carousel__control_prev').click(showPrevSlide);

  let autoChangeSlide = setInterval(() => {
    showNextSlide();
  }, 3500);

  const carousel = $('.carousel');

  carousel.mouseenter(function() {
    clearTimeout(autoChangeSlide);
  });

  carousel.mouseleave(function() {
    autoChangeSlide = setInterval(() => {
      showNextSlide();
    }, 3500);
  });
});
