// MyApp2/src/server_MySQL/User.js
// запуск этого файла в терминале node Users.js

import { Sequelize, Model } from "sequelize"; // импорт Model
import express from 'express';
import sequelize from "./database.js"; // импорт подключение к БД

const app = express();
const urlencodedParser = express.urlencoded({extended: false});

/*Ключевым компонентом в работе Sequelize с бд являются модели. Модели описывают стуктуру хранящихся в бд данных. 
Кроме того, через модели в основном идет взаимодействие с бд. */

// способ определения модели через класс:
class User extends Model {}
User.init({
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  surname: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  login: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  role: {
    type: Sequelize.STRING(10), //  ограничение по длине
    defaultValue: 'user' // значение по умолчанию
  }
}, {
  //sequelize: null, // здесь мы не указываем sequelize
  sequelize,
  modelName: 'User',
  tableName: 'users', // сравните с именем таблицы в БД
  timestamps: false, // отказываемся от создания поля createdAt и updatedAt
});
// добавили №1 11.01.2025
/*
// синхронизация с бд, после успшной синхронизации запускаем сервер
// эти данные можно увидеть в браузере http://localhost:3000/
sequelize.sync().then(()=>{
  app.listen(3000, function(){
    console.log("Сервер ожидает подключения2...");
  });
}).catch(err=>console.log(err));
*/
// получение данных
/*
app.get("/", function(req, res){
  User.findAll({raw: true }).then(data=>{
    res.render("home.component.ts", {
      users: data
    });
  }).catch(err=>console.log(err));
});
*/
// получение данных 2 способ
app.get("/", function(req, res) {
  User.findAll({raw: true })
      .then(data => {
          res.json(data); // отправляем данные клиенту          
      })
      .catch(error => {
          console.error('Ошибка при получении пользователей:', error);
          res.status(500).send('Ошибка сервера2'); //  статус ошибки
      });
});

// добавили №1

// экспорт модели
export default User; // default - по умолчанию