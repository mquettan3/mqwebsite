Template.landingLayout.rendered = function(){

    // Add gray color for background in blank layout
    $('body').addClass('gray-bg');
    Modules.client.landing_dynamics_onRendered();

}

Template.landingLayout.destroyed = function(){

    // Remove special color for blank layout
    $('body').removeClass('gray-bg');
    Modules.client.landing_dynamics_destroyed();

};
