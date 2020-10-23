require('./env')();

const { startServer } = require('@base-cms/marko-web');
const template = require('./server/templates/home-page');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  routes: (app) => app.get('/', (_, res) => res.marko(template)),
});
