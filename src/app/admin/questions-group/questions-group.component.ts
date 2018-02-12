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
    let a = Object.assign({}, obj);
    delete a.statBased;
    let colors = this.getColors(Object.keys(a).length)
    let ctx = this.elementRef.nativeElement.querySelector('#canvas' + i);
		this.chart = new Chart(ctx, {
			type: 'pie',
			data: {
			  labels: Object.keys(a),
			  datasets: [
				{
				  data: Object.values(a),
				  borderColor: 'White',
          backgroundColor: colors,
          hoverBorderColor: "white"
				}
			  ]
			}
		  })
  }
  
  getColors(number) {
    let lights = ['#FF8A65', '#90A4AE', '#FFF176', '#81C784', '#4FC3F7', '#9575CD', '#7986CB', '#F06292', '#AED581', '#FFB74D', '#A1887F', '#E0E0E0'];

    return lights.splice(1, number+1);
  }

}
