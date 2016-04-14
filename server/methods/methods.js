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
    searchOpenGame: function (currentUser) {
        //Debug Purposes - Remove all entries
        RockPaperScissors.remove({});

        //Look for a game with only 1 player.
        var OpenGame = RockPaperScissors.find({PlayerTwo: undefined});
        if(OpenGame.count() > 0) {
            //If one exists, join it.
            RockPaperScissors.update({PlayerTwo: undefined}, {$set: {PlayerTwo: currentUser}})
        } else {
            //Else, create a New game
            RockPaperScissors.insert({
                PlayerOne: currentUser,
                PlayerOnesMove: undefined,
                PlayerTwo: undefined,
                PlayerTwosMove: undefined
            });
        }
    }
});
