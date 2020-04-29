import { config } from 'dotenv';
import server from './api/server';

config();
const { PORT } = process.env;

server.listen(PORT);
