// Ripped from Meteor's documentation.
// In your server code: define a method that the client can call
Meteor.methods({
    sendEmail: function (to, from, subject, text) {
//        check([to, from, subject, text], [String]);

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();

        Email.send({
            to: to,
            from: from,
            subject: subject,
            text: text
        });
    },
    joinGame: function (currentUser) {
        //Debug Purposes - Remove all entries
        // RockPaperScissors.remove({});
        var gameId = 0;

        var CurrentGame = RockPaperScissors.find({$or: [{PlayerOne: this.userId}, {PlayerTwo: this.userId}]})
        if(CurrentGame.count() > 0) {
            //If you're already in a game, don't create another.

            //Return the most recent game ID
            var GameArray = CurrentGame.fetch();
            gameId = GameArray[GameArray.length - 1]._id;
        } else {
            //Look for a game with only 1 player.
            var OpenGame = RockPaperScissors.find({PlayerTwo: undefined});
            if(OpenGame.count() > 0) {
                //Return the most recent game ID
                var GameArray = OpenGame.fetch();
                gameId = GameArray[GameArray.length - 1]._id;

                //If one exists, join it.
                RockPaperScissors.update(GameArray[GameArray.length - 1]._id, {$set: {PlayerTwo: currentUser}})
            } else {
                //Else, create a New game
                gameId = RockPaperScissors.insert({
                    PlayerOne: currentUser,
                    PlayerOnesMove: undefined,
                    PlayerTwo: undefined,
                    PlayerTwosMove: undefined
                });
            }
        }
        return gameId;
    },
    playMove: function (CurrentGame, move) {
        if(RockPaperScissors.find({$and: [{_id: CurrentGame}, {PlayerOne: this.userId}]}).count() > 0) {
            //Insert move as player one's move into the database
            RockPaperScissors.update({_id: CurrentGame}, {$set: {PlayerOnesMove: move}});
        } else if (RockPaperScissors.find({$and: [{_id: CurrentGame}, {PlayerTwo: this.userId}]}).count() > 0) {
            //Insert move as player two's move into the database
            RockPaperScissors.update({_id: CurrentGame}, {$set: {PlayerTwosMove: move}});
        } else {
            console.log("Player not found!");
        }

        //Update the Player's stats
        // Meteor.users.update({_id: this.userId)}, {$push: {MovesPlayed: move}});
    }
});
