let _handleLogout = () => {
  Meteor.logout( () => {
    Bert.alert('Logged out!', 'success');
  });
};

let logout = (options) => {
  return {
    submitHandler() { _handleLogout(options); }
  }
};

Modules.client.logout = logout;
