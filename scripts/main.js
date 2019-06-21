var currentPage = 'homepage';
var previousPage = 'homepage';

function removeHomePage() {
    $('#homepage').removeClass('active');
    $('.sub-content').addClass('slide-north ');
    $('.title').addClass('slide-northeast');
    $('.start-project-button').addClass('slide-north');
    $('.scroll-link').addClass('slide-east');
}

function removeProjectsPage() {
    $('.our-clients').removeClass('slide-east-in');
    $('#projects').removeClass('active');
    $('.portfolio').removeClass('slide-east-in');          
    $('.preview-forest').removeClass('slide-west-in');     
    $('.preview-tacos').removeClass('slide-west-in');       
    $('.preview-bemi').removeClass('slide-west-in');      
    $('.overlay-forest').removeClass('slide-west-in');   
    $('.view-more-button').removeClass('slide-east-in'); 
}

function removeAboutUsPage() {
    $('#about-us').removeClass('active');
    $('.web-design-box').removeClass('slide-north-in');
    $('.software-development-box').removeClass('slide-north-in');
    $('.high-quality-team-box').removeClass('slide-north-in');
    $('.about-us').removeClass('slide-north-in');
}

function transitionToHomePage() {
    if (previousPage === 'projects') {
        removeProjectsPage();
    } else if (previousPage === 'about-us') {
        removeAboutUsPage();
    } else {
        console.warn(`Already in the homepage!`);
    }

    if (currentPage !== 'homepage') {
        $('#homepage').addClass('active');
        $('.title').removeClass('slide-northeast');
        $('.sub-content').removeClass('slide-north');
        $('.start-project-button').removeClass('slide-north');
        $('.scroll-link').removeClass('slide-east');
    }
}

function transitionToProjects() {
    if(previousPage === 'homepage') {
        removeHomePage();  
    } else if(previousPage === 'about-us') {
        removeAboutUsPage();
    } else {
        console.warn(`Already in the projects page`);
    }

    if(currentPage !== 'projects') {
        $('#projects').addClass('active');
        $('.portfolio').addClass('slide-east-in');
        $('.preview-forest').addClass('slide-west-in');
        $('.preview-tacos').addClass('slide-west-in');
        $('.preview-bemi').addClass('slide-west-in');
        $('.overlay-forest').addClass('slide-west-in');
        $('.view-more-button').addClass('slide-east-in');
    }
}

function transitionToAboutUs() {
    if(previousPage === 'homepage') {
        removeHomePage();
    } else if(previousPage == 'projects') {
        removeProjectsPage();
    } else {
        console.warn(`Already in the about us page`);
    }
    
    if(currentPage !== 'about-us') {
        $('#about-us').addClass('active');
        $('.web-design-box').addClass('slide-north-in');
        $('.software-development-box').addClass('slide-north-in');
        $('.high-quality-team-box').addClass('slide-north-in');
        $('.about-us').addClass('slide-north-in');
    }
}

function handleScroll(e) {
    var delta = e.originalEvent.detail;

    if (delta < 0) {
        if (currentPage === 'projects') {
            previousPage = 'projects';
            transitionToHomePage();
            currentPage = 'homepage';
        } else if (currentPage === 'about-us') {
            previousPage = 'about-us';
            transitionToProjects();
            currentPage = 'projects';
        } else {
            console.warn(`Currently on page: ${currentPage}`);
        }
    } else if (delta > 0) {
        if (currentPage === 'homepage') {
            previousPage = 'homepage';
            transitionToProjects();
            currentPage = 'projects';
        } else if (currentPage === 'projects') {
            previousPage = 'projects';
            transitionToAboutUs();
            currentPage = 'about-us';
        } else {
            console.warn(`Currently on ${currentPage}`);
        }
    }
}

$(document).ready(function () {
    console.log($(window).width());
    console.log($(window).height());
    $('html').on('DOMMouseScroll', _.debounce(handleScroll, 100, {
        'leading': true,
        'trailing': false
    }));

    // TODO: Implement compability function for Chrome and Safari

    $('.our-clients').on('DOMMouseScroll', function (e) {
        e.stopPropagation();
    });

    $('#contact').on('click', () => {
        $('.modal').toggle('slow');
    });

    $('.side-nav').on('click', function (e) {
        let id = e.target.id;

        $(`#${currentPage}`).removeClass('active');
        $(`#${id}`).addClass('active');
        previousPage =  currentPage;
        transitionTo = id;

        switch (transitionTo) {
            case 'homepage':
                transitionToHomePage();
                break;
            case 'projects':
                transitionToProjects();
                break;
            case 'about-us':
                transitionToAboutUs();
                break;
            default:
                console.warn(`Trying to access ${currentPage}`);
        }
        currentPage = id;
    });
});