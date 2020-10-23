const { cleanEnv, validators } = require('@base-cms/env');

const { nonemptystr } = validators;
const toApply = ['TENANT_KEY', 'SITE_ID', 'OEMBED_URI', 'GRAPHQL_URI', 'RSS_URI', 'SITEMAPS_URI'];

module.exports = () => {
  const envs = cleanEnv(process.env, {
    TENANT_KEY: nonemptystr({ desc: 'The BaseCMS tenant key.', default: 'p1_sandbox' }),
    OEMBED_URI: nonemptystr({ desc: 'The BaseCMS OEmbed URI.', default: 'https://tauron.oembed.base.parameter1.com' }),
    GRAPHQL_URI: nonemptystr({ desc: 'The BaseCMS Graph URI.', default: 'https://tauron.graphql.base.parameter1.com' }),
    RSS_URI: nonemptystr({ desc: 'The BaseCMS RSS URI.', default: 'https://tauron.rss.base.parameter1.com' }),
    SITEMAPS_URI: nonemptystr({ desc: 'The BaseCMS Sitemap URI.', default: 'https://tauron.sitemaps.base.parameter1.com' }),
    SITE_ID: nonemptystr({ desc: 'The BaseCMS site id.', default: '5ed294c6c13a4626008b4568' }),
  });
  // Set the values back to the process' environment variables
  // eslint-disable-next-line no-return-assign
  toApply.forEach((k) => process.env[k] = envs[k]);
  return envs;
};
