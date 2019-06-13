var currentPage = 'homepage';

function handleScroll(e) {
    var delta = e.originalEvent.detail;
        
        if (delta < 0) {
            if(currentPage === 'projects') {
                currentPage = 'homepage';
                if($('.our-clients').hasClass('slide-east-in')) {
                    $('.our-clients').removeClass('slide-east-in');
                }
                $('#projects').removeClass('active');
                $('#homepage').addClass('active');
                $('.projects-section').addClass('slide-south');
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
                $('.projects-section').removeClass('slide-south');
            } else if(currentPage === 'about-us') {
                currentPage = 'projects';
                $('#about-us').removeClass('active');
                $('#projects').addClass('active');
                $('.portfolio').addClass('slide-east-in');
                $('.preview-forest').addClass('slide-west-in');
                $('.preview-tacos').addClass('slide-west-in');
                $('.preview-bemi').addClass('slide-west-in');
                $('.overlay').addClass('slide-west-in');
                $('.view-more-button').addClass('slide-east-in');
                $('.web-design-box').removeClass('slide-north-in');
                $('.software-development-box').removeClass('slide-north-in');
                $('.high-quality-team-box').removeClass('slide-north-in');
                $('.about-us').removeClass('slide-north-in');
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
                currentPage = 'about-us';
                if($('.our-clients').hasClass('slide-east-in')) {
                    $('.our-clients').removeClass('slide-east-in');
                }
                $('#projects').removeClass('active');
                $('#about-us').addClass('active');
                $('.portfolio').removeClass('slide-east-in');
                $('.portfolio').removeClass('slide-northeast');
                $('.preview-forest').removeClass('slide-west-in');
                $('.preview-tacos').removeClass('slide-west-in');
                $('.preview-bemi').removeClass('slide-west-in');
                $('.overlay-forest').removeClass('slide-west-in');
                $('.view-more-button').removeClass('slide-east-in');
                $('.web-design-box').addClass('slide-north-in');
                $('.software-development-box').addClass('slide-north-in');
                $('.high-quality-team-box').addClass('slide-north-in');
                $('.about-us').addClass('slide-north-in');
            } else {
                console.warn(`Currently on ${currentPage}`);
            }
        }
}
function displayClients() {
    $('.our-clients').addClass('slide-east-in');
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
    });

    $('.our-clients').on('DOMMouseScroll', function(e) {
        console.log(e); 
        e.stopPropagation();
    });

    $('#contact').on('click', () => {
        $('.modal').toggle('slow');
    });
});