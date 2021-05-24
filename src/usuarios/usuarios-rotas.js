const usuariosControlador = require('./usuarios-controlador');
const middlewaresAutentication = require("./middlewares-autenticacao");

module.exports = app => {
  app
    .route('/usuario/login')
    .post(middlewaresAutentication.local,usuariosControlador.login)


  app
    .route('/usuario')
    .post(usuariosControlador.adiciona)
    .get(usuariosControlador.lista);

  app
    .route('/usuario/:id')
    .delete(middlewaresAutentication.bearer,usuariosControlador.deleta);
};
