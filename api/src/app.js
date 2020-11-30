require('dotenv').config();

var express = require('express');
var cors = require('cors');
var morgan = require('morgan');

const { ConsolaError, ConsolaLog } = require('./utils/tools');

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

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//TODO: Definir routes
//? EJEMPLO app.use("/api", require("./routes/route_bank"));

//TODO: Inicializacion del contexto
var sequelize = require('./models/sequelize');

//ficheros estaticos
ConsolaLog(__dirname);

//iniciando servidor
http.listen(app.get('port'), () => {
  try {
    const server = process.env.HOST || 'localhost';
    startServer();

    ConsolaLog('Server Started: https://' + server + ':' + app.get('port'));
  } catch (error) {
    ConsolaError(error);
  }
});

startServer = async () => {
  const result = await sequelize.Autenticate();
  // const response = await sequelize_context.Autenticate();
  // if (!response) await sequelize_context.CreateDatabaseIfNotExists();
  // await sequelize_context.CreateDatabaseIfNotExists();
};
