import dotenv from 'dotenv';
import chalk from 'chalk';
import LanguageTranslatorV3 from 'watson-developer-cloud/language-translator/v3';

dotenv.config();

function params(text = 'hola', source = 'en', target = 'es') {
  return {
    text,
    source,
    target
  };
}

async function doTranslation(text, source, target) {
  const languageTranslator = new LanguageTranslatorV3({
    iam_apikey: process.env.LANGUAGE_TRANSLATOR_API_KEY,
    url: 'https://gateway.watsonplatform.net/language-translator/api/',
    version: '2019-01-10'
  });
  const body = await languageTranslator.translate(params(text, source, target));
  console.log(chalk.cyan(body.translations[0].translation));
}

export default doTranslation;
