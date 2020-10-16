import express from 'express';
import 'express-async-errors';
import path from 'path';
import cors from 'cors';

import _ from './config/env';
import './database/connection';
import { routes } from './routes';
import { errorHandler } from './errors/handler';

const PORT = process.env.NODE_APP_PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`[*] Happy server running on port ${PORT}...`);
});
