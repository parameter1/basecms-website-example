require('./env')();

const { startServer } = require('@base-cms/marko-web');
const template = require('./server/templates/home-page');

module.exports = startServer({
  rootDir: __dirname,
  routes: (app) => app.get('/', (_, res) => res.marko(template)),
});
