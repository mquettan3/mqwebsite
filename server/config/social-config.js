
ServiceConfiguration.configurations.upsert(
  {service: 'facebook'},
  { $set: {appId: Meteor.settings.private.facebook_app_id, secret: Meteor.settings.private.facebook_secret} }
);
ServiceConfiguration.configurations.upsert(
  {service: 'google'},
  { $set: {clientId: Meteor.settings.private.google_client_id, secret: Meteor.settings.private.google_secret} }
);
