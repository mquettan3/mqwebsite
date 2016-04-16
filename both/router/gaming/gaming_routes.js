const gaming_enter = () => {

};

const gamingRoutes = FlowRouter.group({
    name: 'games',
    prefix: '/game',
    triggersEnter: [gaming_enter]
});

gamingRoutes.route('/', {
    name: 'pre_login',
    action() {
        BlazeLayout.render('gamingLayout', {game: 'rockPaperScissors'});
    }
});

gamingRoutes.route('/rockPaperScissors/:_id', {
    name: 'playing_rockpaperscissors',
    action: function(params) {
        console.log(params._id)
        BlazeLayout.render('gamingLayout', {game: 'rockPaperScissors'});
    }
});
