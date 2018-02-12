<<<<<<< HEAD
import { Component, AfterViewInit, ElementRef } from '@angular/core';
=======
import { Component,OnInit, AfterViewInit, ElementRef } from '@angular/core';
>>>>>>> soundaryadev
import { Chart } from 'chart.js';

import { AdminService } from '../admin.service';

@Component({
  selector: 'app-questions-group',
  templateUrl: './questions-group.component.html',
  styleUrls: ['./questions-group.component.css']
})
export class QuestionsGroupComponent {

  answersData: any;
  questions: any;
  chart: any = [];
  visibility : any = [];
  selectedState : any = [];
  submitted: any = [];
 
  constructor(private adminService: AdminService,
              private elementRef: ElementRef) { 

  }
 
  ngOnInit() {
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

  showLess(i){
    this.submitted["canvas" + i] = false;
    this.visibility["canvas" + i] = false;
  }
  makeCharts(obj, i) {
    let ctx = this.elementRef.nativeElement.querySelector('#canvas' + i);
    this.submitted["canvas" + i] = true;
    this.visibility["canvas" + i ] = true;
    this.selectedState = true;
		this.chart = new Chart(ctx,{
			type: 'pie',
			data: {
			  labels: Object.keys(obj),
			  datasets: [
				{
				  data: Object.values(obj),
				  borderColor: 'White',
        backgroundColor:['Yellow','Red','Green','Blue'],
          hoverBackgroundColor : ['Pink'],
				  fill: false
				}
			  ]

			}

		  })
	}

}
