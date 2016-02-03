let _handleExternalAuth = (loginMethod) => {
  console.log(loginMethod);
  if (loginMethod === "facebookLogin") {
    Meteor.loginWithFacebook(function(error) {
      if (error) {
        Bert.alert('Facebook Auth Cancelled', 'warning', 'growl-top-left');
      } else {
        $('.modal-backdrop').remove();
        Bert.alert('Logged in!', 'success', 'growl-top-left');
      }
    });
  } else if (loginMethod === "googleLogin") {
    Meteor.loginWithGoogle(function(error) {
      if (error) {
        Bert.alert('Google Auth Cancelled', 'warning', 'growl-top-left');
      } else {
        $('.modal-backdrop').remove();
        Bert.alert('Logged in!', 'success', 'growl-top-left');
      }
    });
  } else {
    console.log("External Auth Module did not receive correct service name");
  }
};

let externalAuth = (e) => {
  let loginMethod = e;
  _handleExternalAuth(loginMethod);
};

Modules.client.externalAuth = externalAuth;
