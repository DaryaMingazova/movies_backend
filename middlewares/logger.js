//Два файла для хранения логов:
//request.log, чтобы хранить информацию о всех запросах к API;
//error.log, чтобы хранить информацию об ошибках, которые возвращает API.
//Логи должны быть в формате JSON. Файлы логов не должны добавляться в репозиторий.

const winston = require('winston');
const expressWinston = require('express-winston');

const requestLogger = expressWinston.logger({
  transports: [
    new winston.transports.File({ filename: 'request.log' }),
  ],
  format: winston.format.json(),
});

const errorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.File({ filename: 'error.log' }),
  ],
  format: winston.format.json(),
});

module.exports = {
  requestLogger,
  errorLogger,
};
