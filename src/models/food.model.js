'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('Food', {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Food;
