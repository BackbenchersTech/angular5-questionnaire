import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SurveyRoutingModule } from './survey-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SurveyService } from './survey.service';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

@NgModule({
  imports: [
    CommonModule,
    SurveyRoutingModule,
    FormsModule
  ],
  declarations: [SignupComponent, QuestionnaireComponent],
  providers: [
    SurveyService
  ]
})
export class SurveyModule { }
