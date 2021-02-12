const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../context/sequelize');
const sequelize_context = sequelize.GetContext();

const { usuario } = require('./usuario');

const logacceso = sequelize_context.define(
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

logacceso.usuario = logacceso.belongsTo(usuario, { onDelete: 'CASCADE' });

module.exports = {
  logacceso: logacceso
};
