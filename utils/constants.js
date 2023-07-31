const path = require('path');

// Массив доменов, с которых разрешены кросс-доменные запросы
const allowedCors = [
  'https://movies.nomoreparties.co',
  'https://api.movies.nomoreparties.co',
  'http://movies.nomoreparties.co',
  'http://api.movies.nomoreparties.co',
  'https://localhost:3000',
  'http://localhost:3000',
];
const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
const PATH_MOVIESDB = 'mongodb://127.0.0.1:27017/bitfilmsdb';
const PATH_FRONTEND = path.join(__dirname, '../../frontend');

module.exports = {
  allowedCors,
  DEFAULT_ALLOWED_METHODS,
  PATH_MOVIESDB,
  PATH_FRONTEND,
};
