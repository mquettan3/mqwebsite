Template.landingLayout.rendered = function(){
    //Initilize WOW animations
    new WOW().init();

    // Add gray color for background in blank layout
    $('body').addClass('gray-bg');
    $('body').addClass('landing-page');
    var loaded = false;

    //Preloader logic
    window.onload = function() {
        if(!loaded) {
            //Force the pre-loader to exist for at least 1 second.  Anything less is pretty jarring to see.
            setTimeout(function() { // Made the pre-loader not have a default wait time because Ryuga complained.
                $('.loader-wrapper').addClass('animated fadeOut');
            }, 1000);
            $('.loader-wrapper').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                $('.loader-wrapper').remove();
            })
            loaded = true;
        }
    }();
    //End Preloader logic

    $('body').scrollspy({
        target: '#header',
        offset: 80
    })

    // Page scrolling feature
    $('a.page-scroll').bind('click', function (event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 65
        }, 500);
        event.preventDefault();
    });

}

Template.landingLayout.destroyed = function(){

    // Remove special color for blank layout
    $('body').removeClass('gray-bg');
    $('body').removeClass('landing-page');

};
