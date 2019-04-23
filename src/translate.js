import chalk from 'chalk';
import LanguageTranslatorV3 from 'watson-developer-cloud/language-translator/v3';
import config from './config.js';

const getMessageData = text => ({
  text,
  source: config.source,
  target: config.target
});

const getServiceData = () => ({
  iam_apikey: config.apiKey,
  url: config.url,
  version: config.version
});

const doTranslation = async text => {
  const languageTranslator = new LanguageTranslatorV3(getServiceData());
  const body = await languageTranslator.translate(getMessageData(text));
  console.log(chalk.cyan(body.translations[0].translation));
};

export default doTranslation;
