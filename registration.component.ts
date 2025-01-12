// file src/app/registration.component.ts
/* При работе с формами ключевым моментом является использование директивы NgModel. Эта директива с помощью переданной модели 
создает объект FormControl и привязывает эту модель к созданному элементу формы. Объект FormControl отслеживает значение модели, 
а также отвечает за валидацию этого значения и взаимодействие с пользователем.*/

import { Component} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common"; // Import CommonModule

@Component({
    selector: "registration-app",
    imports: [FormsModule,CommonModule ], // для работы с формами импортируем FormsModule

    template:  `<h2> Регистрация </h2>
    <form (ngSubmit)="onSubmit()" #registrationForm="ngForm"  class="registration-form">
   
    <div class="form-group">
                <label for="name" class="control-label">Имя</label>
                <input id="name" name="name" ngModel class="form-control" required />
                <span *ngIf="registrationForm.controls['name']?.invalid && registrationForm.controls['name']?.touched" class="text-danger">Имя обязательно</span>
            </div>
            <div class="form-group">
                <label for="surname" class="control-label">Фамилия</label>
                <input id="surname" name="surname" ngModel class="form-control" required />
                <span *ngIf="registrationForm.controls['surname']?.invalid && registrationForm.controls['surname']?.touched" class="text-danger">Фамилия обязательна</span>
            </div>
            <div class="form-group">
                <label for="city" class="control-label">Город</label>
                <input id="city" name="city" ngModel class="form-control" required />
                <span *ngIf="registrationForm.controls['city']?.invalid && registrationForm.controls['city']?.touched" class="text-danger">Город обязателен</span>
            </div>
            <div class="form-group">
                <label for="country" class="control-label">Страна</label>
                <input id="country" name="country" ngModel class="form-control" required />
                <span *ngIf="registrationForm.controls['country']?.invalid && registrationForm.controls['country']?.touched" class="text-danger">Страна обязательна</span>
            </div>
            <div class="form-group">
                <label for="email" class="control-label">Email</label>
                <input id="email" name="email" type="email" ngModel class="form-control" required />
                <span *ngIf="registrationForm.controls['email']?.invalid && registrationForm.controls['email']?.touched" class="text-danger">Email обязателен</span>
            </div>
            <div class="form-group">
                <label for="login" class="control-label">Логин</label>
                <input id="login" name="login" ngModel class="form-control" required />
                <span *ngIf="registrationForm.controls['login']?.invalid && registrationForm.controls['login']?.touched" class="text-danger">Логин обязателен</span>
            </div>
            <div class="form-group">
                <label for="password" class="control-label">Пароль</label>
                <input id="password" name="password" type="password" ngModel class="form-control" required />
                <span *ngIf="registrationForm.controls['password']?.invalid && registrationForm.controls['password']?.touched" class="text-danger">Пароль обязателен</span>
            </div>
            <button type="submit" class="btn btn-primary" [disabled]="registrationForm.invalid">Зарегистрироваться</button>    
    
    </form> `  

})
export class RegistrationComponent {
    onSubmit() {
    // обработка данных формы
    console.log("Форма отправлена"); 
   }
}