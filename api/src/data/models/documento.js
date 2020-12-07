const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../context/sequelize');
const context = sequelize.GetContext();

const { notificacion } = require('./notificacion');
const { usuario } = require('./usuario');

const documento = context.define(
  'documento',
  {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.STRING, allowNull: true },
    tipo: { type: DataTypes.INTEGER, allowNull: false },
    estado: { type: DataTypes.INTEGER },
    data: { type: DataTypes.BLOB, allowNull: false },
    cliente: { type: DataTypes.INTEGER, allowNull: true },
    contrato: { type: DataTypes.INTEGER, allowNull: false },
    usuario: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  },
  //esto es para que no te cambie el nombre (freezeTableName) y el otro es para cuando lo borres (deletedAt)
  { freezeTableName: true, paranoid: true }
);

documento.usuario = documento.belongsTo(usuario);
documento.notificaciones = documento.hasMany(notificacion, { onDelete: 'CASCADE' });

module.exports = {
  documento: documento
};
