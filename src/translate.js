import chalk from 'chalk';
import LanguageTranslatorV3 from 'watson-developer-cloud/language-translator/v3';
import config from './config.js';

function params(text) {
  return {
    text,
    source: config.source,
    target: config.target
  };
}

async function doTranslation(text) {
  const languageTranslator = new LanguageTranslatorV3({
    iam_apikey: config.apiKey,
    url: config.url,
    version: config.version
  });
  const body = await languageTranslator.translate(params(text));
  console.log(chalk.cyan(body.translations[0].translation));
}

export default doTranslation;
