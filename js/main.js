$(function () {
    $('.slider__items').slick({
        dots:true,
        arrows:false,
       
     });

     $('.menu__btn').on('click', function () {
        $('.header__top').toggleClass('header__top--active');
       
     });
     
    var mixer = mixitup('.gallery__content');

});