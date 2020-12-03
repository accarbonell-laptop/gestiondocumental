const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const roles = sequelize.define('roles', {
  // Model attributes are defined here
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  EstaActivo: {
    type: DataTypes.BOOLEAN
    //allowNull: false
    // allowNull defaults to true
  }
});

// `sequelize.define` also returns the model
console.log(roles === sequelize.models.roles); // true

module.exports = {
  roles: roles
};
