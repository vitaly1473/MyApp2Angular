// file src/main.ts для запуска проекта

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// с помощью функции bootstrapApplication запускается приложение в виде выше определенного компонента AppComponent
//bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

bootstrapApplication(AppComponent, appConfig);