const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const logAcceso = sequelize.define('logAcceso', {
  // Model attributes are defined here
  FechaAcceso: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Usuario_Id: {
    type: DataTypes.INTEGER
    //allowNull: false
    // allowNull defaults to true
  }
});

// `sequelize.define` also returns the model
console.log(logAcceso === sequelize.models.logAcceso); // true

module.exports = {
  logAcceso: logAcceso
};
