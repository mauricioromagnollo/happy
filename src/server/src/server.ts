import express from 'express';
import dotenv from 'dotenv';
import './database/connection';
import { routes } from './routes';

dotenv.config();

const PORT = process.env.NODE_APP_PORT;
const app = express();

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`[*] Happy server running on port ${PORT}...`);
});
