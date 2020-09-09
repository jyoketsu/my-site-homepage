const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = { zhHant: "zh-Hant", ja: "ja", en: "eng" };

module.exports = {
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
  },
};
