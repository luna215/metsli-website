var currentPage = 'homepage';

function handleScroll(e) {
    var delta = e.originalEvent.detail;
        
        if (delta < 0) {
            if(currentPage === 'projects') {
                currentPage = 'homepage';
                $('#projects').removeClass('active');
                $('#homepage').addClass('active');
                $('.projectspage').addClass('slide-south');
                $('.title').removeClass('slide-northeast');
                $('.sub-content').removeClass('slide-north');
                $('.start-project-button').removeClass('slide-north');
                $('.scroll-link').removeClass('slide-east');
                $('.portfolio').removeClass('slide-east-in');
                $('.preview-forest').removeClass('slide-west-in');
                $('.preview-tacos').removeClass('slide-west-in');
                $('.preview-bemi').removeClass('slide-west-in');
                $('.overlay-forest').removeClass('slide-west-in');
                $('.view-more-button').removeClass('slide-east-in');
                $('.projectspage').removeClass('slide-south');
            } else if(currentPage === 'contact') {
                currentPage = 'projects';
                $('#contact').removeClass('active');
                $('#projects').addClass('active');
                $('.portfolio').addClass('slide-east-in');
                $('.preview-forest').addClass('slide-west-in');
                $('.preview-tacos').addClass('slide-west-in');
                $('.preview-bemi').addClass('slide-west-in');
                $('.overlay').addClass('slide-west-in');
                $('.view-more-button').addClass('slide-east-in');
            } else {
                console.warn(`Currently on page: ${currentPage}`);
            }
        } else if (delta > 0) {
            if(currentPage === 'homepage') {
                currentPage = 'projects';
                $('#homepage').removeClass('active');
                $('#projects').addClass('active');
                $('.sub-content').addClass('slide-north ');
                $('.title').addClass('slide-northeast');
                $('.start-project-button').addClass('slide-north');
                $('.scroll-link').addClass('slide-east');
                $('.portfolio').addClass('slide-east-in');
                $('.preview-forest').addClass('slide-west-in');
                $('.preview-tacos').addClass('slide-west-in');
                $('.preview-bemi').addClass('slide-west-in');
                $('.overlay-forest').addClass('slide-west-in');
                $('.view-more-button').addClass('slide-east-in');
            } else if(currentPage === 'projects') {
                currentPage = 'contact'
                $('#projects').removeClass('active');
                $('#contact').addClass('active');
                $('.portfolio').removeClass('slide-east-in');
                $('.portfolio').removeClass('slide-northeast');
                $('.preview-forest').removeClass('slide-west-in');
                $('.preview-tacos').removeClass('slide-west-in');
                $('.preview-bemi').removeClass('slide-west-in');
                $('.overlay-forest').removeClass('slide-west-in');
                $('.view-more-button').removeClass('slide-east-in');
            } else {
                console.warn(`Currently on ${currentPage}`);
            }
        }
}
function displayClients() {
    $('.our-clients').addClass('slide-east-in');
    $('html').off('DOMMouseScroll');
}
$(document).ready(function() {
    $('html').on('DOMMouseScroll', _.debounce(handleScroll, 100, {
        'leading': true,
        'trailing': false
    }));
    // TODO: Implement compability function for Chrome and Safari

    $('.view-more-button').on('click', displayClients);
    $('.tag-remove').on('click', () => {
        $('.our-clients').removeClass('slide-east-in');
        $('html').on('DOMMouseScroll', _.debounce(handleScroll, 100, {
            'leading': true, 
            'trailining': false
        }));
    });
});