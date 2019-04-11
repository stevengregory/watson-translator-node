import prompt from 'prompt';
import doTranslation from './translate';

function init() {
  prompt.start();
  prompt.get(['message'], function(err, result) {
    doTranslation(result.message);
  });
}

init();
