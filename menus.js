$('.menu__header').on('click', function() {

    if ( $(this).siblings('.menu').find('.menu__item').is(":hidden")) {
        $(this).siblings('.menu').find('.menu__item').slideDown();
    }
    else {
        $(this).siblings('.menu').find('.menu__item').slideUp();
        
    }
})
