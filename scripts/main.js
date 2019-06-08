var currentPage = 'homepage';

function handleScroll(e) {
    var delta = e.originalEvent.detail;
        
        if (delta < 0) {
            if(currentPage === 'projects') {
                currentPage = 'homepage';
                $('#projects').removeClass('active');
                $('#homepage').addClass('active');
            } else if(currentPage === 'contact') {
                currentPage = 'projects';
                $('#contact').removeClass('active');
                $('#projects').addClass('active');
            }
        } else if (delta > 0) {
            if(currentPage === 'homepage') {
                // TODO: Need to pause program here to not keep it from scrolling
                currentPage = 'projects';
                $('#homepage').removeClass('active');
                $('#projects').addClass('active');
                $('.sub-content').addClass('slide-north ');
                $('.title').addClass('slide-northeast');
                $('.start-project-button').addClass('slide-north');
                $('.scroll-link').addClass('slide-east');
                
            } else if(currentPage === 'projects') {
                currentPage = 'contact'
                $('#projects').removeClass('active');
                $('#contact').addClass('active');
            } else {
                console.warn(`Currently on ${currentPage}`);
            }
        }
}

$(document).ready(function() {
    // $('html').on('DOMMouseScroll', function (e) {
    //     _.throttle(handleScroll(e), 1000);
    // });
    // $('html').on('DOMMouseScroll', _.throttle(handleScroll, 2050));
    $('html').on('DOMMouseScroll', _.debounce(handleScroll, 100, {
        'leading': true,
        'trailing': false
    }));
    // $('html').on('DOMMouseScroll', once(handleScroll));
});