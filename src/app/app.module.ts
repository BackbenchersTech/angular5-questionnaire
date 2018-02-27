import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SurveyQuestions } from './survey-questions';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [SurveyQuestions, {provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppModule { }
