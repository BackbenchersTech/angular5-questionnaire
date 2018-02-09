import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

import { AdminService } from '../admin.service';

@Component({
  selector: 'app-questions-group',
  templateUrl: './questions-group.component.html',
  styleUrls: ['./questions-group.component.css']
})
export class QuestionsGroupComponent implements AfterViewInit {

  answersData: any;
  questions: any;
  chart: any = [];

  constructor(private adminService: AdminService,
              private elementRef: ElementRef) { }

  ngAfterViewInit() {
    this.getAnswersDataData();
  }

  getAnswersDataData() {
    this.answersData = this.adminService.getData();
    if(Object.keys(this.answersData).length === 0) {
      this.adminService.formAnswersObject();
      this.adminService.getSurvey().subscribe(
        data => {
          this.adminService.countSurveys(data);
        },
        err => {
          console.log(err);
        },
        () => {
          this.questions = Object.keys(this.answersData);
        }
      )
    }
    else {
      this.questions = Object.keys(this.answersData);
    }
  }

  makeCharts(obj, i) {
    let ctx = this.elementRef.nativeElement.querySelector('#canvas' + i);
		this.chart = new Chart(ctx, {
			type: 'pie',
			data: {
			  labels: Object.keys(obj),
			  datasets: [
				{
				  data: Object.values(obj),
				  borderColor: 'White',
				  backgroundColor:['Red', 'Green', 'Blue','Yellow', 'Pink'],
				  fill: false
				}
			  ]
			}
		  })
	}

}
