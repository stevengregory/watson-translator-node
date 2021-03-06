# Watson Translator with Node

An experiment with the [IBM Watson](https://www.ibm.com/watson) Language Translator service using Node. This simple app uses the [Language Translator](https://www.ibm.com/watson/services/language-translator) to perform intelligent language translation; simply enter a message into the prompt to activate Watson.

![Demo](https://i.imgur.com/n3Drccp.png)

The language model is set for English to Japanese, but can be changed in the `config.js` file.

## Requirements

1. Sign up for an [IBM Cloud account](https://dataplatform.cloud.ibm.com/registration/stepone) or simply [log in](https://cloud.ibm.com/login).

1. Create a [Language Translator](https://console.bluemix.net/catalog/services/language-translator) service.

1. Get the API key (will be used later in `.env` config).

## Getting Started

1. Clone this repository.

   ```bash
   git clone https://github.com/stevengregory/watson-translator-node.git
   cd watson-translator-node
   ```

1. Configure the environment settings.

   Create a `.env` file and place it in the root of the project directory.

   ```bash
   touch .env
   ```

   Add the API key from your IBM Watson service.

   ```javascript
   API_KEY=your_api_key
   ```

1. Install the npm packages.

   ```bash
   npm install
   ```

1. Run the app!

   ```bash
   npm start
   ```
