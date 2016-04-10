Meteor.publish( 'current_game', function() {
  return [
    RockPaperScissors.find()
  ];
});