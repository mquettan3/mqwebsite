RockPaperScissors = new Mongo.Collection( 'rockpaperscissors' );

RockPaperScissors.allow({
  insert: () => true,
  update: () => true,
  remove: () => true
});

RockPaperScissors.deny({
  insert: () => false,
  update: () => false,
  remove: () => false
});

let RockPaperScissorsSchema = new SimpleSchema({
  'PlayerOne': {
    type: String,
    label: 'Name of Player One'
  },
  'PlayerOnesMove': {
    type: String,
    label: 'Player Ones selection',
    optional: true
  },
  'PlayerTwo': {
    type: String,
    label: 'Name of Player Two',
    optional: true
  },
  'PlayerTwosMove': {
    type: String,
    label: 'Player Twos selection',
    optional: true
  }
});

RockPaperScissors.attachSchema( RockPaperScissorsSchema );
