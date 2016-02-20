const publicRedirect = () => {

};

const publicRoutes = FlowRouter.group({name: 'public', triggersEnter: [publicRedirect]});

publicRoutes.route('/', {
    name: 'landingPage',
    action() {
        BlazeLayout.render('landingLayout');
    }
});
