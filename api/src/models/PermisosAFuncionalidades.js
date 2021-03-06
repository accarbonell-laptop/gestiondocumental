const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const PermisosAFuncionalidades = sequelize.define('PermisosAFuncionalidades', {
  // Model attributes are defined here
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Tipo: {
    type: DataTypes.INTEGER
    //allowNull: false
    // allowNull defaults to true
  },
  Acceso: {
    type: DataTypes.BOOLEAN
  },
  Inserta: {
    type: DataTypes.BOOLEAN
  },
  Elimina: {
    type: DataTypes.BOOLEAN
  },
  Modifica: {
    type: DataTypes.BOOLEAN
  },
  Lee: {
    type: DataTypes.BOOLEAN
  },
  Rol_Id: {
    type: DataTypes.INTEGER
  }
});

// `sequelize.define` also returns the model
console.log(PermisosAFuncionalidades === sequelize.models.PermisosAFuncionalidades); // true
