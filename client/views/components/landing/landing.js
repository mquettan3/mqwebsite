Template.landing.onCreated(function () {
    this.openModal = new ReactiveVar(false);
    this.modalData = new ReactiveVar(null);

});

Template.landing.onRendered(function () {

    ////////////////////////////////////////////////
    // THIS BLOCK OF CODE ADDS INSPINIAS FUNCTIONALITY TO LANDING PAGE
    // pretty scrolling/dyanmic menu/etc
    ////////////////////////////////////////////////
    $('body').addClass('landing-page');
    $('body').attr('id', 'page-top');

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 80
    });

    // Page scrolling feature
    $('a.page-scroll').bind('click', function (event) {
        var link = $(this);
        $('html, body').stop().animate({
            scrollTop: $(link.attr('href')).offset().top - 50
        }, 500);
        event.preventDefault();
        $("#navbar").collapse('hide');
    });

    var cbpAnimatedHeader = (function () {
        var docElem = document.documentElement,
            header = document.querySelector('.navbar-default'),
            didScroll = false,
            changeHeaderOn = 200;

        function init() {
            window.addEventListener('scroll', function (event) {
                if (!didScroll) {
                    didScroll = true;
                    setTimeout(scrollPage, 250);
                }
            }, false);
        }

        function scrollPage() {
            var sy = scrollY();
            if (sy >= changeHeaderOn) {
                $(header).addClass('navbar-scroll')
            }
            else {
                $(header).removeClass('navbar-scroll')
            }
            didScroll = false;
        }

        function scrollY() {
            return window.pageYOffset || docElem.scrollTop;
        }

        init();

    })();
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////
});

Template.landing.events({
    'click #loginLink': function (event, template) {
        event.preventDefault();
        template.openModal.set(true);
        template.modalData.set(event.target.id);
    },
    'hidden.bs.modal #loginModal': function(event, template) {
        template.openModal.set(false);
        template.modalData.set(null);
    }
});


Template.landing.helpers({
    openModal: function() {
        return Template.instance().openModal.get();
    },
    modalData: function() {
        return Template.instance().modalData.get();
    }
});

Template.landing.destroyed = function () {
    $('body').removeClass('landing-page');
};
