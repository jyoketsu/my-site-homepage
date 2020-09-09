const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
const path = require("path");

module.exports = new NextI18Next({
  defaultLanguage: "zhHans",
  otherLanguages: ["zhHant", "ja", "en"],
  localeSubpaths: { zhHant: "zh-Hant", ja: "jpn", en: "eng" },
  // localeSubpaths,
  localePath: path.resolve("./public/static/locales"),
  shallowRender: true,
});
