Template.rockPaperScissors.rendered = function(){
  let template = Template.instance();
  template.subscribe( 'current_game' );
  template.subscribe( 'user' );
}

Template.rockPaperScissors.destroyed = function(){

};

Template.rockPaperScissors.events({
	'click .joinGame': function ( event ) {
    //Synchronously send my current move
    Meteor.call('joinGame',
      Meteor.userId(),  //Current User
      function (error, result) {
        if (error) {
          console.log(error.message);
        } else {
          //Route to the game!
          FlowRouter.go("/game/rockPaperScissors/".concat(result));
        }
      }
    );
	},
  'click [data-social-login]' ( event, template ) {
  const service = event.target.getAttribute( 'data-social-login' ),
        options = {
          requestPermissions: [ 'email' ]
        };

  if ( service === 'loginWithTwitter' ) {
    delete options.requestPermissions;
  }

  Meteor[ service ]( options, ( error ) => {
    if ( error ) {
      Bert.alert( error.message, 'danger', 'growl-top-left' );
    } else {
      Bert.alert( 'Login Successful!', 'success', 'growl-top-left' );
      $('#myModal').modal('hide');
    }
  });
}
});

Template.rockPaperScissors.helpers({
  current_game: function() {
    let current_game = RockPaperScissors.find();
    if ( current_game ) {
      return current_game;
    }
  },
  current_userid: function() {
    return Meteor.userId();
  }
});
