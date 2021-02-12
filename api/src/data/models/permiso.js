const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../context/sequelize');
const sequelize_context = sequelize.GetContext();

const { rol } = require('./rol');

const permiso = sequelize_context.define(
  'permiso',
  {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    nombre: { type: DataTypes.STRING, allowNull: false },
    tipo: { type: DataTypes.INTEGER },
    acceso: { type: DataTypes.BOOLEAN },
    inserta: { type: DataTypes.BOOLEAN },
    elimina: { type: DataTypes.BOOLEAN },
    modifica: { type: DataTypes.BOOLEAN },
    lee: { type: DataTypes.BOOLEAN },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  },
  { freezeTableName: true, paranoid: true }
);

permiso.rol = permiso.belongsTo(rol);

module.exports = {
  permiso: permiso
};
