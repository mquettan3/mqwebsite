let startup = () => {
  _setEnvironmentVariables();
};

let _setEnvironmentVariables = () => Modules.server.setEnvironmentVariables();

Modules.server.startup = startup;
