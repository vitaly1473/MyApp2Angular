// file MyApp2/src/server_MySQL/sequelize.js
// запуск этого файла в терминале node sequelize.js


import User from "./User.js"; // импорт модель User из файла User.js
import { runhash } from "./hashPassword.js"; // импорт функции хеширования из файла hashPassword.js
import sequelize from "./database.js"; // Импортируем подключение к БД

// Для извлечения всех данных из таблицы применяется метод findAll():

// 1. метод Sequelize, который извлекает все записи из таблицы, связанной с моделью User
/*User.findAll({raw:true}).then(users=>{
    console.log(users);
  }).catch(err=>console.log(err)); */

  //  2. функция для извлечения всех пользователей
function getAllUsers() {
    return User.findAll({ raw: true }) //параметр { raw: true } указывает, что результаты должны быть возвращены 
    // в виде простых объектов, без дополнительных метаданных

      .then(users => { // метод promice:внутри then можно обрабатывать полученные данные — в данном случае выводим их в консоль
        console.log("Сервер ожидает подключения1...");
        console.log(users);
        return users; // возвращаем пользователей
      })
      .catch(err => {
        console.error('Ошибка при извлечении пользователей:', err);
        throw err; // пробрасываем ошибку для дальнейшей обработки
      });
  }
 // вызов функции 
 getAllUsers();

 // метод для добавления данных в БД у модели вызывается метод create(), в который передается добавляемый объект:
 /*User.create({
    name: "elon",
    surname: "musk",    
    city: "New York",
    country: "USA",
    email: "elon@gmail.com",
    login: "elon",
    password: "1234"
  }).then(res=>{
    console.log(res);
  }).catch(err=>console.log(err));*/
  
  async function createUser() {
    const password = '1234'; // Пароль, который вы хотите хешировать

    try {
        const hash_ = await runhash(password); // Хешируем пароль

        const user = await User.create({
            name: "elon",
            surname: "musk",
            city: "New York",
            country: "USA",
            email: "elon@gmail.com",
            login: "elon",
            password: hash_ // используем хешированный пароль
        });

        console.log(user); // вывод результата создания пользователя
        console.log("Создан пользователь: " + user.name);
    } catch (err) {
        console.error(err); // обработка ошибок
    }
}
    
// вызов метода создания пользователя
//createUser();