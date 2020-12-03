const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../context/sequelize');
const sequelize_context = sequelize.GetContext();

const { usuario } = require('./usuario');
const { permiso } = require('./permiso');

const rol = sequelize_context.define(
  'rol',
  {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    nombre: { type: DataTypes.STRING, allowNull: false },
    esta_activo: { type: DataTypes.BOOLEAN },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  },
  { freezeTableName: true, paranoid: true }
);

rol.usuarios = rol.hasMany(usuario);
rol.permisos = rol.hasMany(permiso);

module.exports = {
  rol: rol
};
