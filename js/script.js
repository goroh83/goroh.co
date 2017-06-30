$(document).ready(function () {
    $('.scroll').delay(2000).fadeIn(500);
});

var w = window.innerWidth;

if (w < 890) {
    $('.scroll').hide();
}

$(function () {
    $('#menu-icon').on('click', function () {
        $("#menu").slideToggle("slow");
        $(this).toggleClass("rotated-menu");
    });
});

$(function () {
    $('#menu ul li').on('click', function () {
        $("#menu").slideToggle("slow");
    });

});

// menu dissapears on click
$('#menu').on('click', function () {
    $(this).fadeOut("slow");
    $('#menu-icon').toggleClass("rotated-menu");
});

// accordion
$(document).ready(function () {
    $("#accordion section h3").click(function (e) {
        $(this).parents().siblings("section").addClass("ac_hidden");
        $(this).parents("section").removeClass("ac_hidden");

        e.preventDefault();
    });
});

/* contact-error button function */
function goBack() {
    window.history.back();
}

/* scroll down button */
$(".scroll__down").click(function () {
    $('html, body').animate({
        scrollTop: $(".scroll-down").offset().top
    }, 750);
});


/*  scroll to top */
$('.scroll__top').click(function(){
    $('html, body').animate({
        scrollTop: 0 }, 600);
  return false;
});

$(window).on('scroll', function() {checkScroll()});

function checkScroll() {
    if ($(window).scrollTop() > 900) {
        $('.scroll__top').fadeIn(1000);
    } else {
        $('.scroll__top').fadeOut(700);
    }
}
