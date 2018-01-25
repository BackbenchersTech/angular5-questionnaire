import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SurveyRoutingModule } from './survey-routing.module';
import { SignupComponent } from './signup/signup.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

import { SurveyService } from './survey.service';
import { DynamicQuestionComponent } from './dynamic-question/dynamic-question.component';

@NgModule({
  imports: [
    CommonModule,
    SurveyRoutingModule,
    FormsModule
  ],
  declarations: [SignupComponent, QuestionnaireComponent, DynamicQuestionComponent],
  providers: [
    SurveyService
  ]
})
export class SurveyModule { }
