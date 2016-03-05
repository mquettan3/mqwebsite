
Template.contact.onCreated(function () {

});


Template.contact.events({
  // ----------------------------------------------------------------
  // Form Submission 
  // ----------------------------------------------------------------
  'submit #contact-footer-form': function (event) {
      var default_subject = 'MQWebsite Email From: ';
      var subject = default_subject.concat(event.target.name.value);
      //In your client code: asynchronously send an email
      Meteor.call('sendEmail',
        'mquettan@gmail.com', //to
        event.target.email.value, //from
        subject,//subject
        event.target.message.value); //content
      
      return false;
  }
});

Template.contact.onRendered(function () {

});

Template.contact.destroyed = function () {

};
