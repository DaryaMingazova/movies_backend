const router = require('express').Router();
const {
  getMovies,
  createMovie,
  deleteMovie,
} = require('../controllers/movies');
const celebrates = require('../middlewares/celebrates');
// возвращает все сохранённые текущим пользователем фильмы
router.get('/', getMovies);
// создаёт фильм с переданными в теле
// country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId
router.post('/', celebrates.createMovie, createMovie);
// удаляет сохранённый фильм по id
router.delete('/:_id', celebrates.checkIdMovie, deleteMovie);

module.exports = router;
