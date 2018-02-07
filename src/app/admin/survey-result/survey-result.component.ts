import { Component, OnInit  } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.css']
})
export class SurveyResultComponent implements OnInit {
	
  chart = [];

  constructor() { }

  ngOnInit() {
  	let weatherDates = [10,20,30];
  	let temp_max = [20,30]
  	this.chart = new Chart('canvas', {
          type: 'doughnut',
          data: {
            labels: weatherDates,
            datasets: [
              {
                data: temp_max,
                borderColor: 'Black',
                backgroundColor:['Red','Yellow','green'],
                fill: false
              },
            
            ]
          }
  })

}
}
