const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const documento = sequelize.define('documento', {
  // Model attributes are defined here
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Descripcion: {
    type: DataTypes.STRING

    // allowNull defaults to true
  },
  Tipo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Estado: {
    type: DataTypes.INTEGER

    // allowNull defaults to true
  },
  FechaCreacion: {
    type: DataTypes.DATE

    // allowNull defaults to true
  },
  Data: {
    type: DataTypes.BOOLEAN,
    allowNull: false
    // allowNull defaults to true
  },
  IdCliente: {
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  },
  IdContrato: {
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  },
  Usuario_Id: {
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  }
});

// `sequelize.define` also returns the model
console.log(documento === sequelize.models.documento); // true

module.exports = {
  documento: documento
};
