// file MyApp2/src/server_MySQL/hashPassword.js

import { hash } from 'bcrypt';

// 2 способ 
// экспортируем функцию хеширования
export async function runhash(password) {
    const hash_ = await hash(password, 10);
    return hash_; // возвращаем хешированный пароль
}

// 1 способ
/*
async function runhash() {
    const password = 'password'; // введите пароль для хеширования $2b$10$aac.rmflz7DpSYXCFTCjI.KeDr9qyCZSw6O2Fbn5XPLTK8PRhD5uu
    const hashedPassword = await hash(password, 10);
    console.log('Хешированный пароль:', hashedPassword);
}
runhash().catch(console.error); */

