$(function () {
    $(".menu a, .footer__bottom a, .logo").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $('.slider__items').slick({
        dots:true,
        arrows:false,
       
     });

     $('.menu__btn, .menu a').on('click', function () {
        $('.header__top').toggleClass('header__top--active');
       
     });
     
    var mixer = mixitup('.gallery__content');

});