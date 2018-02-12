import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

import { AdminService } from '../admin.service';

@Component({
  selector: 'app-questions-group',
  templateUrl: './questions-group.component.html',
  styleUrls: ['./questions-group.component.css']
})
export class QuestionsGroupComponent implements OnInit {

  answersData: any;
  questions: any;
  chart: any = [];
  visibility : any = [];
  selectedState : any = [];
  submitted: any = [];
 
  constructor(private adminService: AdminService,
              private elementRef: ElementRef) { }
 
  ngOnInit() {
    this.getAnswersDataData();
  }

  getAnswersDataData() {
    this.answersData = this.adminService.getData();
    if(Object.keys(this.answersData).length === 0) {
      this.adminService.formAnswersObject();
    }
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

  showLess(i) {
    this.submitted["canvas" + i] = false;
    this.visibility["canvas" + i] = false;
  }

  makeCharts(obj, i) {
    this.submitted["canvas" + i] = true;
    this.visibility["canvas" + i ] = true;
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
		});
  }
  
  getColors(number) {
    let lights = ['#FF8A65', '#90A4AE', '#FFF176', '#81C784', '#4FC3F7', '#9575CD', '#7986CB', '#F06292', '#AED581', '#FFB74D', '#A1887F', '#E0E0E0'];

    return lights.splice(0, number+1);
  }

}
