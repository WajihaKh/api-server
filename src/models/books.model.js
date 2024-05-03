'use strict';

const Book = (sequelize, DataTypes) => sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Author',
      key: 'id',
    },
  },
});

module.exports = Book;
