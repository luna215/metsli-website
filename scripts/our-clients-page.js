$(document).ready(function() {
    $('.portfolio').hover(function() {
        $('.forest').css('background-image', "url('./images/svgs/forest-background.svg')");
    });

    $('.portfolio').mouseleave(function() {
        $('.forest').css('background-image', "");
    });

    $('span.premier').hover(function() {
        $('div.premier').css('background-image', "url('./images/premierpool.png')");
    });

    $('span.premier').mouseleave(function() {
        $('div.premier').css('background-image', "");
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