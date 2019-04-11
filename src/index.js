import prompts from 'prompts';
import doTranslation from './translate';

(async () => {
  let response = await prompts({
    type: 'text',
    name: 'meaning',
    message: 'Enter a message for IBM Watson to translate.',
    validate: name => (name.length <= 0 ? false : true)
  });
  doTranslation(response.meaning);
})();
