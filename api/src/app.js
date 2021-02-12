//require('dotenv').config();

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var dotenv = require('dotenv');

//const { ConsolaError, ConsolaLog } = require('./utils/tools');

dotenv.config();

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

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json());

//TODO: Definir routes
app.use('/api', require('./routes/inicial')); //definiciendo primera ruta

//funciones importadas
var sequelize_context = require('./models/sequelize');
var tools = require('./utils/tools');

<<<<<<< Updated upstream
var sequelize = require('./data/context/sequelize');
=======
//var sequelize = require('./models/sequelize');
>>>>>>> Stashed changes

//ficheros estaticos
tools.ConsolaLog(__dirname);

//iniciando servidor
http.listen(app.get('port'), () => {
  try {
    const server = process.env.HOST || 'localhost';
    tools.ConsolaLog(`Server Started at: http:// ${server}:${app.get('port')} ☕`);
    startServer();
  } catch (error) {
    tools.ConsolaError(error);
  }
});

app.get('/', (req, res) => {
  res.send('Todo fine...');
});

startServer = async () => {
  const response = await sequelize_context.Autenticate();
  if (!response) await sequelize_context.CreateDatabaseIfNotExists();
};

//TODO: Implementar en caso de que no se pueda Auteticar entonces Crear la base de datos
// const response = await sequelize_context.Autenticate();
// if (!response) await sequelize_context.CreateDatabaseIfNotExists();
// await sequelize_context.CreateDatabaseIfNotExists();
