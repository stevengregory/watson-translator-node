import dotenv from 'dotenv';

dotenv.config();

const config = {
  apiKey: process.env.API_KEY,
  source: 'en',
  target: 'ja',
  url: 'https://gateway.watsonplatform.net/language-translator/api/',
  version: '2019-01-10'
};

export default config;
