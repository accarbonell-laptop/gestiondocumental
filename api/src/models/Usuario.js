const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const usuario = sequelize.define('usuario', {
  // Model attributes are defined here
  Nombre: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  CorreoElectronico: {
    type: DataTypes.STRING

    // allowNull defaults to true
  },
  Contraseña: {
    type: DataTypes.STRING,
    allowNull: false
  },
  EstaActivo: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  EsSupervisor: {
    type: DataTypes.BOOLEAN

    // allowNull defaults to true
  },
  FechaUltimoAcceso: {
    type: DataTypes.DATE

    // allowNull defaults to true
  },
  RolId: {
    type: DataTypes.INTEGER

    // allowNull defaults to true
  },
  SupervisorId: {
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  }
});

// `sequelize.define` also returns the model
console.log(usuario === sequelize.models.usuario); // true

module.exports = {
  usuario: usuario
};
