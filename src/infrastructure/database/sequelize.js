const { Sequelize } = require('sequelize');

const dialect = process.env.DB_DIALECT || 'postgres';

const sequelize = new Sequelize(
  process.env.DB_NAME || 'mascotas_db',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'postgres',
  {
  dialect,
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    logging: false
  }
);

module.exports = { sequelize };
