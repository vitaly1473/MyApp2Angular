// file src/app/app.config.ts
// Добавление и установка маршрутов

// импортируются функция providerRouter (для установки маршрутов) и класс Routes, который представляет коллекцию маршрутов:
//import { provideRouter } from '@angular/router';
import { provideRouter, Routes } from "@angular/router";
// Для приложения маршруты устанавливаются как часть конфигурации приложения, которая представляет класс ApplicationConfig.
//import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { ApplicationConfig } from "@angular/core";
import { routes } from './app.routes';

// компоненты, которые сопоставляются с маршрутами
import {HomeComponent} from "./home.component";
import {LoginComponent} from "./login.component";
import {RegistrationComponent} from "./registration.component";
//import {NotFoundComponent} from "./not-found.component";

// определение маршрутов
const appRoutes: Routes =[
  { path: "", component: HomeComponent},
  { path: "login", component: LoginComponent},
  { path: "registration", component: RegistrationComponent},

  //{ path: "**", component: NotFoundComponent }
];

//export const appConfig: ApplicationConfig = {
  //providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]

  export const appConfig: ApplicationConfig = {
    providers: [provideRouter(appRoutes)]
};
