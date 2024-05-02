'use strict';

require('dotenv').config();
const {Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
const sequelizeOptions = process.env.NODE === 'production' ? {
  dialectOptions: {
    ssl: {
      required: true,
      rejectUnauthorized: false,
    },
  },
} : {};
let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

const animalSchema = require('./animal.js');
const foodSchema = require('./food.js');

module.exports = {
  db: sequelize,
  Animal: animalSchema(sequelize, DataTypes),
  Food: foodSchema(sequelize, DataTypes),

};
