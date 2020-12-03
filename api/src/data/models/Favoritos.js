const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../context/sequelize');
const sequelize_context = sequelize.GetContext();

const favorito = sequelize.define(
  'favorito',
  {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    cliente: { type: DataTypes.INTEGER, allowNull: false },
    usuario: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  },
  //esto es para que no te cambie el nombre (freezeTableName) y el otro es para cuando lo borres (deletedAt)
  { freezeTableName: true, paranoid: true }
);

module.exports = {
  favorito: favorito
};
