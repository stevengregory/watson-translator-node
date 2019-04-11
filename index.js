import prompt from 'prompt';
import dotenv from 'dotenv';
import LanguageTranslatorV3 from 'watson-developer-cloud/language-translator/v3';

dotenv.config();

const languageTranslator = new LanguageTranslatorV3({
  username: process.env.LANGUAGE_TRANSLATOR_USERNAME,
  password: process.env.LANGUAGE_TRANSLATOR_PASSWORD,
  version: '2019-01-10'
});

function params(text = 'hola', source = 'en', target = 'es') {
  return {
    text,
    source,
    target
  };
}

async function callTranslate(text) {
  const body = await languageTranslator.translate(params(text));
  console.log(body.translations[0].translation);
}

async function init() {
  prompt.start();
  await prompt.get(['msg'], function(err, result) {
    callTranslate(result.msg);
  });
}

init();
