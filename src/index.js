import prompt from 'prompt';
import doTranslation from './translate';

function init() {
  prompt.start();
  prompt.get(['Message to translate'], function(err, result) {
    doTranslation(result.msg);
  });
}

init();
