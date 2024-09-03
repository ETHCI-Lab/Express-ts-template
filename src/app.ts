import express from 'express'
import {router} from "./Routers"
import { logger } from './middlewares/log';
const http = require('http');
import cors from 'cors';
import { MongoDB } from './utils/MongoDB';
require('dotenv').config()
const app: express.Application = express()
const server = http.createServer(app);

export const DB = new MongoDB({
  host:process.env.DBHOST as string,
  port:process.env.DBPORT as string,
  name:process.env.DBNAME as string
});

app.use(cors({
  "origin": "http://localhost:5173",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 200
}))


app.use(express.json({limit:'50mb'}));
app.use(express.urlencoded({ extended: false }))
app.use('/assets', express.static(process.env.assetsPath as string));

for (const route of router) {
  app.use(route.getRouter())
}

server.listen(process.env.PORT, () => {
  logger.info('listening on *:'+process.env.Port);
});


