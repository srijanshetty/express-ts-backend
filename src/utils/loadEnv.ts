import dotenv from 'dotenv';

// Set the env file
dotenv.config({
  path: `./env/env.${process.env.NODE_ENV}`,
});
