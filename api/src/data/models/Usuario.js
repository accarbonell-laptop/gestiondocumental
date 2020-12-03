const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../context/sequelize');
const sequelize_context = sequelize.GetContext();

const usuario = sequelize.define(
  'usuario',
  {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    nombre: { type: DataTypes.STRING(40), allowNull: false },
    correo_electronico: { type: DataTypes.STRING },
    contrasena: { type: DataTypes.STRING, allowNull: false },
    activo: { type: DataTypes.BOOLEAN, allowNull: false },
    supervisor: { type: DataTypes.BOOLEAN },
    fecha_ultimo_acceso: { type: DataTypes.DATE },
    rol_id: { type: DataTypes.INTEGER },
    supervisor: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  },
  { freezeTableName: true, paranoid: true }
);
module.exports = {
  usuario: usuario
};
