RockPaperScissors = new Mongo.Collection( 'rockpaperscissors' );

RockPaperScissors.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

RockPaperScissors.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

let RockPaperScissorsSchema = new SimpleSchema({
  'PlayerOne': {
    type: String,
    label: 'Name of Player One'
  },
  'PlayerOnesMove': {
    type: String,
    label: 'Player Ones selection'
  },
  'PlayerTwo': {
    type: String,
    label: 'Name of Player Two'
  },
  'PlayerTwosMove': {
    type: String,
    label: 'Player Twos selection'
  }
});

RockPaperScissors.attachSchema( RockPaperScissorsSchema );