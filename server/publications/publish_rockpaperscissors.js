Meteor.publish( 'current_game', function(game_id) {
  if(game_id) {
      RockPaperScissors.find({_id: game_id})
      console.log(game_id);
    return [
      RockPaperScissors.find({_id: game_id})
    ];
  } else {
    return [
      RockPaperScissors.find({$or: [{PlayerOne: this.userId}, {PlayerTwo: this.userId}]})
    ];
  }
});

Meteor.publish( 'user', function() {
  return Meteor.users.find( this.userId, {
    fields: {
      "services.facebook.email": 1,
      "services.github.email": 1,
      "services.google.email": 1,
      "services.twitter.screenName": 1,
      "emails": 1,
      "profile": 1
    }
  });
});
