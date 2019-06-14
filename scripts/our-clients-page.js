$(document).ready(function() {
    $('.portfolio').hover(function() {
        $('.forest').fadeIn("slow", function() {});
    });

    $('.portfolio').mouseleave(function() {
        $('.forest').fadeOut("slow", function() {});
    });

    $('span.premier').hover(function() {
        $('div.premier').fadeIn("slow", function() {});
    });

    $('span.premier').mouseleave(function() {
        $('div.premier').fadeOut("slow", function() {});
    });

    $('span.tacos').hover(function() {
        $('div.tacos').css('background-image', "url('./images/tacosman.png')");
    });

    $('span.tacos').mouseleave(function() {
        $('div.tacos').css('background-image', "");
    });

    $('span.bemi').hover(function() {
        
        $('div.bemi').css('background-image', "url('./images/bemi.png')");
    });

    $('span.bemi').mouseleave(function() {
        $('div.bemi').css('background-image', "");
    });
}); 