let startup = () => {
  //_setBrowserPolicies();
  //_generateAccounts();
  //_generatePeople();
  _setEnvironmentVariables();
};

/*let _setBrowserPolicies = () => {
  BrowserPolicy.content.allowOriginForAll( '*.amazonaws.com' );
  BrowserPolicy.content.allowOriginForAll( '*.googleapis.com' );
  BrowserPolicy.content.allowOriginForAll( '*.gstatic.com' );
  BrowserPolicy.content.allowOriginForAll( '*.rhgaming.com' );
  BrowserPolicy.content.allowOriginForAll('*.bootstrapcdn.com');
};*/

//let _generateAccounts = () => Modules.server.generateAccounts();

//let _generatePeople = () => Modules.server.generatePeople();

let _setEnvironmentVariables = () => Modules.server.setEnvironmentVariables();

Modules.server.startup = startup;
