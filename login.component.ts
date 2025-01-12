// file MyApp2/src/app/login.component.ts

import { Component} from "@angular/core";
import { HttpClient } from '@angular/common/http'; // Импорт HttpClient
import { firstValueFrom } from 'rxjs'; // Импорт firstValueFrom


@Component({
    selector: "login-app",
    template: `<h2> Войти </h2>
    <!-- <button (click)="testConnection()">Проверить подключение</button> -->
    `
})
export class LoginComponent { 
   // constructor(private http: HttpClient) {}

    onSubmit() {
        console.log("Логин и пароль отправлены"); 
    }

   /* async testConnection() {
        try {
            const response = await firstValueFrom(this.http.get('http://localhost:3306/test'));
            console.log('Ответ от сервера:', response);
        } catch (error) {
            console.error('Ошибка при подключении к серверу:', error);
        }
    }*/
}