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
                $('.portfolio').addClass('slide-east-in');
                $('.preview').addClass('slide-west-in');
                $('.overlay').addClass('slide-west-in');
                
            } else if(currentPage === 'projects') {
                currentPage = 'contact'
                $('#projects').removeClass('active');
                $('#contact').addClass('active');
                $('.projectspage').addClass('slide-north');
            } else {
                console.warn(`Currently on ${currentPage}`);
            }
        }
}

$(document).ready(function() {
    $('html').on('DOMMouseScroll', _.debounce(handleScroll, 100, {
        'leading': true,
        'trailing': false
    }));
    // TODO: Implement compability function for Chrome and Safari
});