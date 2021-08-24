import { TConfig } from './types';

const config: TConfig = {
  server: {
    port: process.env.SERVER_PORT || 3000,
    killTimeout: process.env.SERVER_KILLTIMEOUT,
    dev: process.env.NODE_ENV !== 'production'
  },
  
};

export = config
