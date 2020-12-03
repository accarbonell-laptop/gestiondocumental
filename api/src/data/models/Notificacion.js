const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../context/sequelize');
const sequelize_context = sequelize.GetContext();

const { documento } = require('./documento');
const { usuario } = require('./usuario');

const notificacion = sequelize_context.define(
  'notificacion',
  {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    motivo: { type: DataTypes.STRING, allowNull: false },
    cliente: { type: DataTypes.STRING },
    codigocopextel: { type: DataTypes.STRING },
    reup: { type: DataTypes.STRING },
    contrato: { type: DataTypes.STRING },
    estado: { type: DataTypes.BOOLEAN },
    fecha: { type: DataTypes.DATE },
    respondida: { type: DataTypes.BOOLEAN },
    vista: { type: DataTypes.BOOLEAN },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  },
  { freezeTableName: true, paranoid: true }
);

notificacion.documento = notificacion.belongsTo(documento, { onDelete: 'CASCADE' });
notificacion.aprobador = notificacion.belongsTo(usuario);
notificacion.solicita = notificacion.belongsTo(usuario);

module.exports = {
  notificacion: notificacion
};
