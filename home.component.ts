// file src/app/home.component.ts

import { Component} from "@angular/core";


@Component({
    selector: "home-app",
    template: `<h2>Главная</h2>

    <h1>Список пользователей</h1>
    <table>
        <tr><th>Name</th><th>Login</th><th></th></tr>
        <!--<tr *ngFor="let user of users  ">
                <td>{{ user.name }}</td>
                <td>{{ user.login }}</td>
            </tr> -->
    </table>

`
})
export class HomeComponent { }

