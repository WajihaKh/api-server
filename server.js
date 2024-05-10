'use strict';

const express = require('express');
const cors = require('cors');

const app = express();

const notFoundHandler = require('./src/handlers/404.js');
const errorHandler = require('./src/handlers/500.js');
// const logger = require('./src/middleware/logger.js');
const animal = require('./src/routes/animal.js');
const foodRoutes = require('./src/routes/food.route.js');

const bookRoutes = require('./src/routes/books.js');
const authorRoutes = require('./src/routes/authors.js');

app.use(cors());
app.use(express.json());

// app.use(logger);

app.use(animal);
app.use(foodRoutes);
app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);
// Force an error for the tests
app.get('/broken', (req,res,next) => next('whoops!'));

app.use('*', notFoundHandler);
app.use(errorHandler);


function start(port) {
  app.listen(port, () => {
    console.log(`Server is up on ${port}`);
  });
}

module.exports = { app, start };
