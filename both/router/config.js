FlowRouter.notFound = {
    action() {
        FlowRouter.render('notFound');
    }
};

if (Meteor.isClient) {
    Tracker.autorun(() => {
        if (FlowRouter.current().route) {
            FlowRouter.go('landingPage');
        }
    });
}
