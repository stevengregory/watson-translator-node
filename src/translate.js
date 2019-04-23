import chalk from 'chalk';
import LanguageTranslatorV3 from 'watson-developer-cloud/language-translator/v3';
import config from './config.js';

function getMessageData(text) {
  return {
    text,
    source: config.source,
    target: config.target
  };
}

function getServiceData() {
  return {
    iam_apikey: config.apiKey,
    url: config.url,
    version: config.version
  };
}

async function doTranslation(text) {
  const languageTranslator = new LanguageTranslatorV3(getServiceData());
  const body = await languageTranslator.translate(getMessageData(text));
  console.log(chalk.cyan(body.translations[0].translation));
}

export default doTranslation;
