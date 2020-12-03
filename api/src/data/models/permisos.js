const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../context/sequelize');
const sequelize_context = sequelize.GetContext();

const permisos = sequelize.define(
  'permisos',
  {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    nombre: { type: DataTypes.STRING, allowNull: false },
    tipo: { type: DataTypes.INTEGER },
    acceso: { type: DataTypes.BOOLEAN },
    inserta: { type: DataTypes.BOOLEAN },
    elimina: { type: DataTypes.BOOLEAN },
    modifica: { type: DataTypes.BOOLEAN },
    lee: { type: DataTypes.BOOLEAN },
    rol_id: { type: DataTypes.INTEGER },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  },
  { freezeTableName: true, paranoid: true }
);

module.exports = {
  permisos: permisos
};
