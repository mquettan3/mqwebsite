Template.rockPaperScissors.rendered = function(){
  let template = Template.instance();
  template.subscribe( 'current_game' );
}

Template.rockPaperScissors.destroyed = function(){

};

Template.rockPaperScissors.events({
	'click .search_game': function ( event ) {
		
	}
});

Template.rockPaperScissors.helpers({
  current_game: function() {
    //let current_game = RockPaperScissors.find();
    let current_game = [ {
    	PlayerOne: 'one',
    	PlayerOnesMove: 'rock',
    	PlayerTwo: 'two',
    	PlayerTwosMove: 'paper',    	
    }];
    
    if ( current_game ) {
      return current_game;
    }
  }
});