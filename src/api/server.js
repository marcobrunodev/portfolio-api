import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import winston from 'winston';
import routes from './routes';
import database from './config/database';

const server = express();

server.use(helmet());
server.use(bodyParser.json());
server.use(
  morgan('combined', {
    stream: winston.stream.write,
    skip: () => process.env.NODE_ENV === 'test',
  })
);

database();
routes(server);

export default server;
