import { config } from 'dotenv';

console.log(process.env.NODE_ENV);

export default () =>
  config({
    path: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env',
  });
