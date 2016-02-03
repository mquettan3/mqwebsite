let _handleLogin = () => {
  let email = $('[name="emailAddressLogin"]').val(),
    password = $('[name="passwordLogin"]').val();

  Meteor.loginWithPassword(email, password, (error) => {
    if (error) {
      Bert.alert(error.reason, 'warning', 'growl-top-left');
    } else {
      $('.modal-backdrop').remove();
      Bert.alert('Logged in!', 'success', 'growl-top-left');
    }
  });
};

let validation = () => {
  return {
    rules: {
      emailAddressLogin: {
        required: true,
        email: true
      },
      passwordLogin: {
        required: true
      }
    },
    messages: {
      emailAddressLogin: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?'
      },
      passwordLogin: {
        required: 'Need a password here.'
      }
    },
    submitHandler() {
      _handleLogin();
    }
  };
};

let _validate = (form) => {
  $(form).validate(validation());
};

let login = (options) => {
  _validate(options.form);
};



Modules.client.login = login;
