'use strict';

import { Sequelize } from 'sequelize';

import { ConsolaInfo, ConsolaError } from '../utils/tools';

//Passing parameters separately (other dialects: one of 'mysql' | 'mariadb' | 'postgres' | 'mssql')
const sequelize_context = new Sequelize(
  process.env.DB_SCHEMAS || 'gestiondocumental',
  process.env.DB_USER || '',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || '1433',
    dialect: 'mssql',
    operatorsAliases: false,
    pool: {
      max: 30,
      min: 20,
      acquire: 30000,
      idle: 10000
    },
    logging: true
    // dialectOptions: {
    //   // useUTC: false, // for reading from database
    //   dateStrings: true,
    //   typeCast: function (field, next) {
    //     // for reading from database
    //     if (field.type === 'DATETIME') {
    //       return field.string();
    //     }
    //     return next();
    //   }
    // },
    // timezone: '-04:00' // for writing to database
  }
);
// Choose one of the logging options
// logging: console.log,                  // Default, displays the first parameter of the log function call
// logging: (...msg) => console.log(msg), // Displays all log function call parameters
// logging: false,                        // Disables logging
// logging: msg => logger.debug(msg),     // Use custom logger (e.g. Winston or Bunyan), displays the first parameter
// logging: logger.debug.bind(logger)     // Alternative way to use custom logger, displays all messages

//Retorna el Conexto de Datos
export function GetContext() {
  return sequelize_context;
}

//TODO: Crea la base de datos si no existe con el TEDIOUS(buscar en documentacion) https://tediousjs.github.io/tedious/
export async function CreateDatabaseIfNotExists() {
  try {
    const Connection = require('tedious').Connection;
    //configurar el json y pasarlo a la conexion
    const config = {
      authentication: {
        server: process.env.DB_HOST || '127.0.0.1'
        //puerto, usuario, contraseña
        // "options": {...}
      }

      // "options": {
      //   ...
      // }
    };
    const mssql = new Connection(config);

    const dbName = process.env.DB_SCHEMAS || 'gestiondocumental';
    mssql.execSql(`CREATE DATABASE IF NOT EXISTS ${dbName};`);

    // const connection = await mysql.createConnection({
    //   host: process.env.DB_HOST || '127.0.0.1',
    //   port: process.env.DB_PORT || '1433',
    //   user: process.env.DB_USER || '',
    //   password: process.env.DB_PASSWORD || ''
    // });
    // const res = await connection.query();
    ConsolaInfo('Database created...');
    await this.Autenticate();
  } catch (error) {
    ConsolaError('Database can not be create or checked: ' + error);
  }
}

//Autenticar el Modelo para Probar la conexión
export async function Autenticate() {
  try {
    await sequelize_context.authenticate();
    await sequelize_context.sync();
    ConsolaInfo('Connection has been established successfully.');
    return true;
  } catch (error) {
    ConsolaError('Unable to connect to the database: ' + error);
    return false;
  }
}

//Sincronizar el Modelo
export async function SyncCompleteModel() {
  try {
    await sequelize_context.sync();
    ConsolaInfo('All models were synchronized successfully.');
  } catch (error) {
    ConsolaError('All models can not be synchronized: ' + error);
  }
}

//Eliminar todas las tablas de la Base de Datos
export async function DropAllTables() {
  try {
    await sequelize_context.drop();
    ConsolaInfo('All tables dropped!');
  } catch (error) {
    ConsolaError('All tables can not be dropped:' + error);
  }
}
