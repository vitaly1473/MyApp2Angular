// file MyApp2/src/server_MySQL/database.js

import { Sequelize } from "sequelize";

// Создаём подключение к базе данных
const sequelize = new Sequelize("game", "root", "1234",  // параметры: 1 - имя БД, 2 логин к бд, 3 - пароль к БД 
    {
    dialect: "mysql",
    host: "localhost"
});

// экспортируем подключение
export default sequelize;

