import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { SurveyQuestions } from './survey-questions';



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule
  ],
  bootstrap: [AppComponent],
  providers: [SurveyQuestions]
})
export class AppModule { }
