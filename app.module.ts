// file MyApp2/src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,   
      ],
  imports: [
    BrowserModule, ],
  providers: [
    provideHttpClient() // 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }