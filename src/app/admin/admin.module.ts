import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';

import { AdminService } from './admin.service';
import { SurveyResultComponent } from './survey-result/survey-result.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    DataTablesModule
  ],
  declarations: [DashboardComponent, SurveyResultComponent],
  providers: [AdminService]
})
export class AdminModule { }
