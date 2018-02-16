import { Component, ElementRef, AfterViewInit, ViewChildren, HostListener, OnChanges } from '@angular/core';
import { Chart } from 'chart.js';

import { AdminService } from '../admin.service';

@Component({
  selector: 'app-questions-group',
  templateUrl: './questions-group.component.html',
  styleUrls: ['./questions-group.component.css']
})
export class QuestionsGroupComponent implements OnChanges {

  answersData: any;
  questions: any;
  canvasVisibility: any = [];
  submitted: any = [];

  @ViewChildren('parent') canvases;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 767 ) {
      this.showAllCharts();
    }
    else {
      this.hideAllCharts();
    }
  }
 
  constructor(private adminService: AdminService,
              private elementRef: ElementRef) { }
 
  ngAfterViewInit() {
    this.getAnswersDataData();
    this.canvases.changes.subscribe(() => {
      this.makeCharts(this.canvases.toArray())
    });
  }

  ngOnChanges() {
    console.log("hey")
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
    this.canvasVisibility["canvas" + i] = false;
  }

  showChart(i) {
    this.submitted["canvas" + i] = true;
    this.canvasVisibility["canvas" + i] = true;
  }

  makeCharts(canvases) {
    for(let i =  0; i < this.questions.length; i++) {
      let question = this.questions[i];
      if(!this.answersData[question].statBased) {
        this.canvasVisibility["canvas" + i]=false;
      }
      else {
      let answer = this.answersData[question];
      let a = Object.assign({}, answer);
      delete a.statBased;
      let colors = this.getColors(Object.keys(a).length);
      let ctx = canvases[i].nativeElement;
      let chart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: Object.keys(a),
          datasets: [
            {
              data: Object.values(a),
              borderColor: 'white',
              backgroundColor: colors,
              hoverBorderColor: "white"
            }
          ]
        },
        options:{
          responsive:false
        }
      });
      this.canvasVisibility["canvas" + i] = (window.innerWidth > 767) ? true : false;
      }
    }
  }
  
  getColors(number) {
    let lights = ['#FF8A65', '#90A4AE', '#FFF176', '#81C784', '#4FC3F7', '#9575CD', '#7986CB', '#F06292', '#AED581', '#FFB74D', '#A1887F', '#E0E0E0'];

    return lights.splice(0, number+1);
  }

  showAllCharts() {
    for (let i in this.canvasVisibility) {
      this.canvasVisibility[i] = true;
      this.submitted[i] = false;
    }
  }

  hideAllCharts() {
    for (let i in this.canvasVisibility) {
      this.canvasVisibility[i] = false;
      this.submitted[i] = false;
    }
  }

}
