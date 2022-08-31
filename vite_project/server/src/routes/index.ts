const login = require('./login');

const routesRequire = [
  login,
];

module.exports = {
  install(app:any) {
    routesRequire.forEach(route => route.install(app));
  }
};