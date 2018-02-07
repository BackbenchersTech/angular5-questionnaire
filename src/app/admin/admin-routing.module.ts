import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SurveyResultComponent } from './survey-result/survey-result.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
  	path: 'survey-result',
  	component:SurveyResultComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
