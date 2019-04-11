import dotenv from 'dotenv';
import chalk from 'chalk';
import LanguageTranslatorV3 from 'watson-developer-cloud/language-translator/v3';

dotenv.config();

function params(text = 'hola', target = 'es', source = 'en') {
  return {
    text,
    target,
    source
  };
}

async function doTranslation(text, target) {
  const languageTranslator = new LanguageTranslatorV3({
    username: process.env.LANGUAGE_TRANSLATOR_USERNAME,
    password: process.env.LANGUAGE_TRANSLATOR_PASSWORD,
    version: process.env.LANGUAGE_TRANSLATOR_VERSION
  });
  const body = await languageTranslator.translate(params(text, target));
  console.log(chalk.cyan(body.translations[0].translation));
}

export default doTranslation;
