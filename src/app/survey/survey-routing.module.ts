import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';
import { NolocationComponent } from './nolocation/nolocation.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'questionnaire',
    component: QuestionnaireComponent
  },
  {
    path: 'nolocation',
    component: NolocationComponent
  },
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyRoutingModule { }
