import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';

import { AdminService } from './admin.service';
import { QuestionsGroupComponent } from './questions-group/questions-group.component';
import { KeysPipe } from './keys.pipe';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule
  ],
  declarations: [DashboardComponent, QuestionsGroupComponent, KeysPipe],
  providers: [AdminService]
})
export class AdminModule { }
