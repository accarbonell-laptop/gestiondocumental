const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const favoritos = sequelize.define('Favoritos', {
  // Model attributes are defined here
  IdCliente: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Usuario_Id: {
    type: DataTypes.INTEGER,
    allowNull: false
    // allowNull defaults to true
  }
});

// `sequelize.define` also returns the model
console.log(favoritos === sequelize.models.favoritos); // true

module.exports = {
  favoritos: favoritos
};
