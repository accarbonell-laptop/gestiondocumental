'use strict';

const { Sequelize } = require('sequelize');
<<<<<<< Updated upstream:api/src/data/context/sequelize.js
var { ConsolaError, ConsolaInfo } = require('../../utils/tools');
const tedious = require('tedious');
=======

var tools = require('../utils/tools');
>>>>>>> Stashed changes:api/src/models/sequelize.js

//Passing parameters separately (other dialects: one of 'mysql' | 'mariadb' | 'postgres' | 'mssql')
const sequelize_context = new Sequelize(
  process.env.DB_SCHEMAS || 'gestiondocumental',
  process.env.DB_USER || 'sa',
  process.env.DB_PASSWORD || '$ql-2008-SCU/*-',
  {
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
    logging: false,
    pool: { idle: 30000, min: 20, max: 30 },
    dialectOptions: {
      // useUTC: false, // for reading from database
      dateStrings: true,
      typeCast: function (field, next) {
        // for reading from database
        if (field.type === 'DATETIME') {
          return field.string();
        }
        return next();
      }
    },
    timezone: '-04:00' // for writing to database
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

//Crea la base de datos si no existe
exports.CreateDatabaseIfNotExists = async () => {
  const mysql = require('mysql2/promise');
  const dbName = process.env.DB_SCHEMAS || 'gestiondocumental';

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || '3306',
      user: process.env.DB_USER || 'sa',
      password: process.env.DB_PASSWORD || '$ql-2008-SCU/*-'
    });
    const res = await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`);
    tools.ConsolaInfo('Database created...');

    await this.Autenticate();
  } catch (error) {
    tools.ConsolaError('Database can not be create or checked: ' + error);
  }
};
//Autenticar el Modelo para Probar la conexión
exports.Autenticate = async () => {
  try {
    await sequelize_context.authenticate();
<<<<<<< Updated upstream:api/src/data/context/sequelize.js
    ConsolaInfo('Connection has been established successfully.');
    await this.SyncCompleteModel();
=======
    await sequelize_context.sync();
    tools.ConsolaInfo('Connection has been established successfully.');
>>>>>>> Stashed changes:api/src/models/sequelize.js
    return true;
  } catch (error) {
    tools.ConsolaError('Unable to connect to the database: ' + error);
    return false;
  }
};
//Sincronizar el Modelo
exports.SyncCompleteModel = async () => {
  try {
    await sequelize_context.sync();
<<<<<<< Updated upstream:api/src/data/context/sequelize.js

    ConsolaInfo('All models were synchronized successfully.');
=======
    tools.ConsolaInfo('All models were synchronized successfully.');
>>>>>>> Stashed changes:api/src/models/sequelize.js
  } catch (error) {
    tools.ConsolaError('All models can not be synchronized: ' + error);
  }
};
//Eliminar todas las tablas de la Base de Datos
exports.DropAllTables = async () => {
  try {
    await sequelize_context.drop();
    tools.ConsolaInfo('All tables dropped!');
  } catch (error) {
    tools.ConsolaError('All tables can not be dropped:' + error);
  }
};
