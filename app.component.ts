/* file MyApp1/src/app/app.component.ts */

/*  http://localhost:4200/ */

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink} from '@angular/router';


@Component({
  selector: "my-app",
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  //imports: [FormsModule],
   
  styleUrl: './app.component.css',
  
  /*<link rel="stylesheet" href="~/lib/bootstrap/dist/css/bootstrap.min.css" />*/
  template: `
               
            <div class="text-center">
                             
                <nav>
                        <a routerLink="">Главная</a> <br>
                        <a routerLink="/login"> Войти </a> <br>
                        <a routerLink="/registration"> Зарегистрироваться </a>
                </nav>
               
               <router-outlet></router-outlet>
           </div> `
}) // закрыли @Component
export class AppComponent {
  title = 'My App3';
  name= "";
}
/* 36 lines of code */
