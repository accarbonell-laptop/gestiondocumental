const { DataTypes, Sequelize } = require('sequelize');

const sequelize = require('./sequelize');
const context = sequelize.GetContext();

const Documento = context.define(
  'doc',
  {
    // Model attributes are defined here
    Nombre: { type: DataTypes.STRING, allowNull: false },
    Descripcion: { type: DataTypes.STRING },
    Tipo: { type: DataTypes.INTEGER, allowNull: false },
    Estado: { type: DataTypes.INTEGER },
    FechaCreacion: { type: DataTypes.DATE },
    Data: { type: DataTypes.BOOLEAN, allowNull: false },
    IdCliente: { type: DataTypes.INTEGER, allowNull: false },
    IdContrato: { type: DataTypes.INTEGER, allowNull: false },
    Usuario_Id: { type: DataTypes.INTEGER, allowNull: false }
  },
  { freezeTableName: true, paranoid: true }
);

//#endregion

sequelize.SyncCompleteModel();

module.exports = {
  Documento: Documento
};
