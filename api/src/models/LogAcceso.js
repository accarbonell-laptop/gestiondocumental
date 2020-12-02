const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const LogAcceso = sequelize.define('LogAcceso', {
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
console.log(LogAcceso === sequelize.models.LogAcceso); // true
