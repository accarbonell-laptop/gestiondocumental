'use strict';

const { Sequelize } = require('sequelize');
var { ConsolaError, ConsolaInfo } = require('../utils/tools');
const tedious = require('tedious');

//Passing parameters separately (other dialects: one of 'mysql' | 'mariadb' | 'postgres' | 'mssql')
const sequelize_context = new Sequelize(
  process.env.DB_SCHEMA || 'gestiondocumental',
  process.env.DB_USER || 'sa',
  process.env.DB_PASSWORD || '$ql-2008-SCU/*-',
  {
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || '1433',
    dialect: 'mssql',
    logging: true
  }
);

// Choose one of the logging options
// logging: console.log,                  // Default, displays the first parameter of the log function call
// logging: (...msg) => console.log(msg), // Displays all log function call parameters
// logging: false,                        // Disables logging
// logging: msg => logger.debug(msg),     // Use custom logger (e.g. Winston or Bunyan), displays the first parameter
// logging: logger.debug.bind(logger)     // Alternative way to use custom logger, displays all messages

//Retorna el Conexto de Datos
exports.GetContext = () => sequelize_context;

//TODO: Crea la base de datos si no existe con el TEDIOUS(buscar en documentacion) https://tediousjs.github.io/tedious/
exports.CreateDatabaseIfNotExists = async () => {
  try {
    const dbName = process.env.DB_SCHEMA || 'gestiondocumental';
    const mssql = await this.MSSQLConnection();
  } catch (error) {
    ConsolaError('Database can not be create or checked: ' + error);
  }
};

//Autenticar el Modelo para Probar la conexión
exports.Autenticate = async () => {
  try {
    await sequelize_context.authenticate();
    await sequelize_context.sync();
    ConsolaInfo('Connection has been established successfully.');
    return true;
  } catch (error) {
    ConsolaError('Unable to connect to the database: ' + error);
    return false;
  }
};

//Sincronizar el Modelo
exports.SyncCompleteModel = async () => {
  try {
    await sequelize_context.sync();
    ConsolaInfo('All models were synchronized successfully.');
  } catch (error) {
    ConsolaError('All models can not be synchronized: ' + error);
  }
};

//Eliminar todas las tablas de la Base de Datos
exports.DropAllTables = async () => {
  try {
    await sequelize_context.drop();
    ConsolaInfo('All tables dropped!');
  } catch (error) {
    ConsolaError('All tables can not be dropped:' + error);
  }
};
