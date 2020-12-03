const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../context/sequelize');
const sequelize_context = sequelize.GetContext();

const logacceso = sequelize.define(
  'logacceso',
  {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    fechaAcceso: { type: DataTypes.DATE, allowNull: false },
    usuario: { type: DataTypes.INTEGER },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  },
  //esto es para que no te cambie el nombre (freezeTableName) y el otro es para cuando lo borres (deletedAt)
  { freezeTableName: true, paranoid: true }
);

module.exports = {
  logacceso: logacceso
};
