const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Notificacion = sequelize.define('Notificacion', {
  // Model attributes are defined here
  Motivo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Cliente: {
    type: DataTypes.STRING

    // allowNull defaults to true
  },
  CodigoCopextel: {
    type: DataTypes.STRING,
    allowNull: false
  },
  REUP: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Contrato: {
    type: DataTypes.STRING

    // allowNull defaults to true
  },
  Estado: {
    type: DataTypes.INTEGER

    // allowNull defaults to true
  },
  Fecha: {
    type: DataTypes.DATE

    // allowNull defaults to true
  },
  Respondida: {
    type: DataTypes.BOOLEAN,
    allowNull: false
    // allowNull defaults to true
  },
  VistaPorMi: {
    type: DataTypes.BOOLEAN,
    allowNull: false
    // allowNull defaults to true
  },
  Documento_Id: {
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  },
  UsuarioAprobador_Id: {
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  },
  UsuarioSolicita_Id: {
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  }
});

// `sequelize.define` also returns the model
console.log(Notificacion === sequelize.models.Notificacion); // true
