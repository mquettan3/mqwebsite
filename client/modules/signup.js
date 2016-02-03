let signup = ( options ) => {
  _validate( options.form );
};

let _validate = ( form ) => {
  $( form ).validate( validation() );
};

let validation = () => {
  return {
    rules: {
      emailAddressSignup: {
        required: true,
        email: true
      },
      passwordSignup: {
        required: true,
        minlength: 6
      },
      pass_againSignup: {
        required: true,
        minlength: 6,
        equalTo: '#passwordSignup'
      }
    },
    messages: {
      emailAddressSignup: {
        required: 'Need an email address here.',
        email: 'Is this email address legit?'
      },
      passwordSignup: {
        required: 'Need a password here.',
        minlength: 'Use at least six characters, please.'
      },
      pass_againSignup: {
        required: 'Need a password here.',
        minlength: 'Use at least six characters, please.',
        equalTo: 'Passwords do not match'
      }
    },
    submitHandler() { _handleSignup(); }
  };
};

let _handleSignup = () => {
  let user = {
    email: $( '[name="emailAddressSignup"]' ).val(),
    password: $( '[name="passwordSignup"]' ).val()
  };

  Accounts.createUser( user, ( error ) => {
    if ( error ) {
      Bert.alert( error.reason, 'danger', 'growl-top-left' );
    } else {
      $('.modal-backdrop').remove();
      Bert.alert( 'Welcome!', 'success', 'growl-top-left' );
    }
  });
};

Modules.client.signup = signup;
