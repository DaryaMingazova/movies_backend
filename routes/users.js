const router = require('express').Router();
const {
  getUser,
  updateUser,
} = require('../controllers/users');
const celebrates = require('../middlewares/celebrates');
// возвращает информацию о пользователе (email и имя)
router.get('/me', getUser);
// обновляет информацию о пользователе (email и имя)
router.patch('/me', celebrates.updateUser, updateUser);

module.exports = router;
