import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { SurveyRoutingModule } from './survey-routing.module';
import { SignupComponent } from './signup/signup.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { NolocationComponent } from './nolocation/nolocation.component';

import { SurveyService } from './survey.service';
import { LocationService } from './location.service';

@NgModule({
  imports: [
    CommonModule,
    SurveyRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [SignupComponent, QuestionnaireComponent, NolocationComponent],
  providers: [
    SurveyService,
    LocationService
  ]
})
export class SurveyModule { }
