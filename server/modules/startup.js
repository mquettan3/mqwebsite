let startup = () => {
  _setEnvironmentVariables();
  _configureServices();  
};

let _setEnvironmentVariables = () => Modules.server.setEnvironmentVariables();
let _configureServices = () => Modules.server.configureServices();

Modules.server.startup = startup;
