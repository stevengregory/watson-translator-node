import prompt from 'prompt';
import doTranslation from './translate';

function init() {
  prompt.start();
  prompt.get(['msg'], function(err, result) {
    doTranslation(result.msg);
  });
}

init();
