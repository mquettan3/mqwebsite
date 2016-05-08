Template.rockPaperScissors.rendered = function(){
  let template = Template.instance();
  template.subscribe( 'current_game', FlowRouter.getParam("_id") );
}

Template.rockPaperScissors.destroyed = function(){

};

Template.rockPaperScissors.events({
  'submit .move_selection': function(event) {
    event.preventDefault();
    console.log("Playing ".concat(event.target.selected_move.value))
    //Synchronously send my current move
    Meteor.call('playMove',
      FlowRouter.getParam("_id"), //Game Id
      event.target.selected_move.value //Move
    );
  }
});

Template.rockPaperScissors.helpers({
  current_game: function() {
    let current_game = RockPaperScissors.find();
    if ( current_game.count() ) {
      if (current_game.count() > 1) {
        console.log("Error: ".concat(current_game.count()).concat(" Games Found!"));
      } else {
        return current_game.fetch()[0];
      }
    }
  },
  current_userid: function() {
    return Meteor.userId();
  }
});
