Template.navbar.onRendered(function () {
    Modules.client.landing_dynamics_onRendered();
});

Template.landing.destroyed = function () {
    Modules.client.landing_dynamics_destroyed();
};
