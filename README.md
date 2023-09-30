# Проект: Фильмы
### Описание
Сервис, в котором можно найти фильмы по запросу и сохранить в личном кабинете.

### Стек технологий 
- Сервер на Ubuntu в Яндекс.Облаке
- ssh-ключи для доступа к серверу
- API-сервер на Node.js + express.js
- База данных MongoDB + Mongoose
- Закрепленный за доменом публичный IP-адрес сервера 
- Раздача фронтенда через nginx
- Шифрование данных. Протокол HTTPS
- Стабильное приложение с использованием менеджера процессов pm2
 
### Функциональность
- Созданы схемы и модели ресурсов API
- Созданы роуты и контроллеры
- Реализована аутентификация и авторизация
- Реализовано логирование

### Макет figma
https://www.figma.com/file/Vufy5NJYf7Oqh6dPOfNUrj/light-1?type=design&node-id=891-3857&mode=design&t=8cJ5y4RHu41CaMSj-0

## Ссылки:
- [IP] http://84.252.131.55
- [Frontend]  https://movies.nomoreparties.co
- [Backend]  https://api.movies.nomoreparties.co (API)

## Директории

`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и карточки   
`/models` — папка с файлами описания схем пользователя и карточки  
  
Остальные директории вспомогательные, создаются при необходимости разработчиком

## Запуск проекта

`npm run start` — запускает сервер   
`npm run dev` — запускает сервер с hot-reload


