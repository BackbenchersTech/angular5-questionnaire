import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionsGroupComponent } from './questions-group/questions-group.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
  	path: 'questions',
    component: QuestionsGroupComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
