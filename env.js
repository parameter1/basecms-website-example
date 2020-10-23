const { cleanEnv, validators } = require('@base-cms/env');

const { nonemptystr } = validators;

module.exports = () => cleanEnv(process.env, {
  TENANT_KEY: nonemptystr({ desc: 'The BaseCMS tenant key.' }),
  OEMBED_URI: nonemptystr({ desc: 'The BaseCMS OEmbed URI.' }),
  GRAPHQL_URI: nonemptystr({ desc: 'The BaseCMS Graph URI.' }),
  RSS_URI: nonemptystr({ desc: 'The BaseCMS RSS URI.' }),
  SITEMAPS_URI: nonemptystr({ desc: 'The BaseCMS Sitemap URI.' }),
});
