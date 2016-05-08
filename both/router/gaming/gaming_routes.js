const gaming_enter = () => {

};

const gamingRoutes = FlowRouter.group({
    name: 'games',
    prefix: '/game',
    triggersEnter: [gaming_enter]
});

gamingRoutes.route('/', {
    name: 'gameHome',
    action() {
        BlazeLayout.render('gamingLayout', {game: 'gameHome'});
    }
});

gamingRoutes.route('/rockPaperScissors/:_id', {
    name: 'playing_rockpaperscissors',
    action: function(params) {
        BlazeLayout.render('gamingLayout', {game: 'rockPaperScissors'});
    }
});
