import prompt from 'prompt';
import dotenv from 'dotenv';

dotenv.config();

function init() {
  prompt.start();
  prompt.get(['message'], function(err, result) {
    console.log('message: ' + result.message);
  });
}

init();
