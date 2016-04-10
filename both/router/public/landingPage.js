const publicRedirect = () => {

};

const publicRoutes = FlowRouter.group({name: 'public', triggersEnter: [publicRedirect]});

publicRoutes.route('/', {
    name: 'landingPage',
    action() {
        BlazeLayout.render('landingLayout');
    }
});

publicRoutes.route('/game', {
    name: 'gaming',
    action() {
        BlazeLayout.render('gamingLayout', {game: 'rockPaperScissors'});
    }
});
