$(document).ready(function() {
    $('.portfolio').hover(function() {
        $('.forest').fadeIn("fast", function() {});
    });

    $('.portfolio').mouseleave(function() {
        $('.forest').fadeOut("fast", function() {});
    });

    $('span.premier').hover(function() {
        $('div.premier').fadeIn("fast", function() {});
    });

    $('span.premier').mouseleave(function() {
        $('div.premier').fadeOut("fast", function() {});
    });

    $('span.tacos').hover(function() {
        $('div.tacos').fadeIn("fast", function() {});
    });

    $('span.tacos').mouseleave(function() {
        $('div.tacos').fadeOut("fast", function() {});
    });

    $('span.bemi').hover(function() {
        $('div.bemi').fadeIn('fast', function() {});
    });

    $('span.bemi').mouseleave(function() {
        $('div.bemi').fadeOut("fast", function() {});
    });
}); 