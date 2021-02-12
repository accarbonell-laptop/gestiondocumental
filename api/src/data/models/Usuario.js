const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../context/sequelize');
const sequelize_context = sequelize.GetContext();

const { documento } = require('./documento');
const { favorito } = require('./favoritos');
const { logacceso } = require('./logacceso');
const { notificacion } = require('./notificacion');
const { rol } = require('./rol');

const usuario = sequelize_context.define(
  'usuario',
  {
    _id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    nombre: { type: DataTypes.STRING(40), allowNull: false },
    correo_electronico: { type: DataTypes.STRING },
    contrasena: { type: DataTypes.STRING, allowNull: false },
    activo: { type: DataTypes.BOOLEAN, allowNull: false },
    es_supervisor: { type: DataTypes.BOOLEAN },
    fecha_ultimo_acceso: { type: DataTypes.DATE },
    rol_id: { type: DataTypes.INTEGER },
    supervisor: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  },
  { freezeTableName: true, paranoid: true }
);

usuario.documentos = usuario.hasMany(documento, { onDelete: 'CASCADE' });
usuario.favoritos = usuario.hasMany(favorito, { onDelete: 'CASCADE' });
usuario.logs = usuario.hasMany(logacceso, { onDelete: 'CASCADE' });

usuario.supervisor = usuario.hasOne(usuario);
usuario.subordinados = usuario.hasMany(usuario);

usuario.rol = usuario.hasOne(rol);

module.exports = {
  usuario: usuario
};
