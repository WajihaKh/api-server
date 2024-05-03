const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');

const Collection = require('./collection.js');

const animalModel = require('./animal.js');
const foodModel = require('./food.model.js');
const bookSchema = require('./books.model.js');
const authorSchema = require('./authors.model.js');

let sequelizeOptions = {
  dialect: process.env.NODE_ENV === 'test' ? 'sqlite' : 'postgres', // Assuming PostgreSQL for non-test environments
};

if (process.env.NODE_ENV === 'test') {
  sequelizeOptions.storage = 'memory'; // For SQLite
}

let sequelize = new Sequelize(DATABASE_URL, {logging:false});

const bookModel = bookSchema(sequelize, DataTypes);
const authorModel = authorSchema(sequelize, DataTypes);

bookModel.hasMany(authorModel, {foreignKey: 'bookId', sourceKey: 'id'});
authorModel.belongsTo(bookModel, {foreignKey: 'authorId', targetKey: 'id'});

const bookCollection = new Collection(bookModel);
const authorCollection = new Collection(authorModel);

module.exports = {
  db: sequelize,
  Books: bookCollection,
  Author: authorCollection,
  Animal: animalModel(sequelize, DataTypes),
  Food: foodModel(sequelize, DataTypes),
};
