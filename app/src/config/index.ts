import { TConfig } from './types';
require('dotenv').config();

const config: TConfig = {
  server: {
    port: process.env.SERVER_PORT || 3000,
    killTimeout: process.env.SERVER_KILLTIMEOUT,
    dev: process.env.NODE_ENV !== 'production',
    pokemonApiUrl: process.env.API_POKEMON_URL
  },
  
};

export = config
