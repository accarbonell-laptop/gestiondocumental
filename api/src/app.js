'use strict';

import express, { urlencoded, json } from 'express';
import cors from 'cors';
import morgan from 'morgan';

//creando la app de express
const app = express();
const http = require('http').createServer(app);

//TODO: vamos a dejar pendiente esto para luego
//!la definicion de swagger(libreria para documentar la api)
//!inicializacion de socket.io

//configurando express
app.set('port', process.env.PORT || 1433); //puerto que viene en el archivo .env o 1433(default)
app.set('json spaces', 2); //setearle a los JSON que recibe dos espacios

//uso de middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(json());

//TODO: Definir routes
//? EJEMPLO app.use("/api", require("./routes/route_bank"));

//TODO: Inicializacion del contexto
//? var sequelize_context = require("./models/sequelize");
import { ConsolaLog, ConsolaError } from './utils/tools';

//ficheros estaticos
ConsolaLog(__dirname);

//iniciando servidor
http.listen(app.get('port'), () => {
  try {
    const server = process.env.HOST || 'localhost';
    ConsolaLog('Server Started: https://' + server + ':' + app.get('port'));
    startServer();
  } catch (error) {
    ConsolaError(error);
  }
});

startServer = async () => {
  const response = await sequelize_context.Autenticate();
  if (!response) await sequelize_context.CreateDatabaseIfNotExists();
};
