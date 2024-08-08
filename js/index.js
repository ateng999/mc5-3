$(document).ready(function(){
    $('.slider').slick({
        prevArrow: $('.group-prev'),
        nextArrow: $('.group-next'),
        dots: true
    });

	$('.single-item').slick();
});