import express from 'express';
import dotenv from 'dotenv';

import './database/connection';

import { routes } from './routes';

dotenv.config();

const PORT = process.env.SERVER_APP_HAPPY_PORT;

const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`[*] Server port: ${PORT}`)
});
