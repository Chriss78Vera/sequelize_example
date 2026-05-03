const { DataTypes } = require('sequelize');
const { sequelize } = require('../sequelize');

const MascotaModel = sequelize.define(
  'TB_MASCOTAS',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Nombre'
    },
    raza: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Raza'
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'Tipo'
    },
    peso: {
      type: DataTypes.FLOAT,
      allowNull: false,
      field: 'Peso'
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'Edad'
    },
    vacunado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      field: 'Vacunado'
    }
  },
  {
    tableName: 'TB_MASCOTAS',
    timestamps: true
  }
);

module.exports = MascotaModel;
