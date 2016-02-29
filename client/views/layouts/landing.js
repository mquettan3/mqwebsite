Template.landingLayout.rendered = function(){

    // Add gray color for background in blank layout
    $('body').addClass('gray-bg');
    $('body').addClass('landing-page');
    var loaded = false;

    //Preloader logic
    window.onload = function() {
        if(!loaded) {
            $('.loader-wrapper').addClass('animated fadeOut');
            $('.loader-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('.loader-wrapper').remove();
            })
            loaded = true;
        }
    }();
    //End Preloader logic

    $('body').scrollspy({
        target: '.header-fixed',
        offset: 65
    })

    // Page scrolling feature
    $('a.page-scroll').bind('click', function (event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 50
        }, 500);
        event.preventDefault();
    });

}

Template.landingLayout.destroyed = function(){

    // Remove special color for blank layout
    $('body').removeClass('gray-bg');
    $('body').removeClass('landing-page');

};
