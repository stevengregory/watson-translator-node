import prompt from 'prompt';
import dotenv from 'dotenv';
import LanguageTranslatorV3 from 'watson-developer-cloud/language-translator/v3';

dotenv.config();

const languageTranslator = new LanguageTranslatorV3({
  username: process.env.LANGUAGE_TRANSLATOR_USERNAME,
  password: process.env.LANGUAGE_TRANSLATOR_PASSWORD,
  version: '2019-01-10'
});

const params = {
  text: 'Hello, this is a example of translating language with Watson.',
  source: 'en',
  target: 'es'
};

async function callTranslate(msg) {
  const body = await languageTranslator.translate(params);
  console.log(body.translations[0].translation);
}

async function init() {
  prompt.start();
  await prompt.get(['msg'], function(err, result) {
    // console.log('message: ' + callTranslate());
    callTranslate(result.msg);
  });
}

init();
