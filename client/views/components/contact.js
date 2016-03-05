
Template.contact.onCreated(function () {

});


Template.contact.events({
  // ----------------------------------------------------------------
  // Form Submission 
  // ----------------------------------------------------------------
  'submit #contact-footer-form': function (event) {
      //In your client code: asynchronously send an email
      Meteor.call('sendEmail',
        'mquettan@gmail.com', //to
        'mquettan@gmail.com', //from
        'Hello from Meteor!', //subject
        'This is a test of Email.send.'); //content
      
      return false;
  }
});

Template.contact.onRendered(function () {

});

Template.contact.destroyed = function () {

};
