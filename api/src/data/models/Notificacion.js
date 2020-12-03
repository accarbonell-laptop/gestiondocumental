const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../context/sequelize');
const sequelize_context = sequelize.GetContext();

const notificacion = sequelize.define(
  'notificacion',
  {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    motivo: { type: DataTypes.STRING, allowNull: false },
    cliente: { type: DataTypes.INTEGER },
    codigocopextel: { type: DataTypes.STRING, allowNull: false },
    reup: { type: DataTypes.STRING, allowNull: false },
    contrato: { type: DataTypes.STRING },
    estado: { type: DataTypes.INTEGER },
    fecha: { type: DataTypes.DATE },
    respondida: { type: DataTypes.BOOLEAN, allowNull: false },
    vista: { type: DataTypes.BOOLEAN, allowNull: false },
    documento: { type: DataTypes.INTEGER, allowNull: false },
    usuario_aprobador: { type: DataTypes.INTEGER, allowNull: false },
    usuario_solicita: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  },
  { freezeTableName: true, paranoid: true }
);

module.exports = {
  notificacion: notificacion
};
