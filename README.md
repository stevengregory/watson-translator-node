# Watson Translator with Node

An experiment with the [IBM Watson](https://www.ibm.com/watson) Language Translator service using Node. This simple app uses the [Language Translator](https://www.ibm.com/watson/services/language-translator) to perform intelligent language translation; with the language model set for English to Japanese.

![Demo](https://i.imgur.com/n3Drccp.png)

## Requirements

1. Sign up for an [IBM Cloud account](https://dataplatform.cloud.ibm.com/registration/stepone) or simply log in.

1. Create a [Language Translator](https://console.bluemix.net/catalog/services/language-translator) service.

1. Get the API key (will be used later in `.env` config).

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/stevengregory/watson-translator-node.git
   cd watson-translator-node
   ```

1. Install the npm packages

   ```bash
   npm install
   ```

1. Configure environment settings

   Create a `.env` file and place it in the root of the project directory. Add the API key from your IBM Watson service.

   ```javascript
   API_KEY = your_api_key;
   ```

1. Run the app!

   ```bash
   npm start
   ```
