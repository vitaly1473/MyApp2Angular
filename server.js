// file MyApp2/src/server_MySQL/server.js
// запуск этого файла в терминале node server.js
// запустив этот файд в терминале - мы получим данные из БД 
// эти данные можно увидеть в браузере http://localhost:3000/

// 2 способ работы с БД 
import express from 'express'; // Импортируем Express
import sequelize from "./database.js"; // Импортируем подключение к БД
import User from "./User.js"; // Импортируем модель User

const app = express();
const urlencodedParser = express.urlencoded({ extended: false });

// Синхронизация с БД и запуск сервера
sequelize.sync().then(() => {
  app.listen(3000, function() {
    console.log("Database ----------------- ok1!");
    console.log("Сервер ожидает подключения3!...");
  });
}).catch(err => console.log(err));

// Получение данных
app.get("/", function(req, res) {
  User.findAll({ raw: true })
      .then(data => {
          res.json(data); // Отправляем данные клиенту
      })
      .catch(error => {
          console.error('Ошибка при получении пользователей:', error);
          res.status(500).send('Ошибка сервера3'); // Статус ошибки
      });
});

/*
// 1 способ работы с БД
// конфигурация пакета 
const conn = createConnection({
  host: "localhost",
  user: "root", // пользователь root
  //user: "vbd", // или пользователь vbd
  database: "books", // БД 
  //database: "vbd", // или БД vbd
  password: "password"
});

conn.connect(err=>{
  if (err){
    console.log(err);
    return err;
  }
  else {
    console.log("Database ------------------ ok1!");
  }
});

 let query = "SELECT * FROM book ";
conn.query(query, (err, result, field) =>{

  if (err) {
    return console.error("Ошибка: " + err.message);
  }
  else {
  //console.log(err);
  console.log("Данные из таблицы book:",result);
  console.log(field);
  }
}); 
// закрытие соединения
conn.end(err =>{
  if (err){
    console.log(err);
    return err;
  }
  else {
    console.log("Подключение закрыто");
    console.log("Database ------------------ closed!");
  }
})
*/
