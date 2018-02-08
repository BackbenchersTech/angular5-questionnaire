import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-survey-result',
  templateUrl: './survey-result.component.html',
  styleUrls: ['./survey-result.component.css']
})
export class SurveyResultComponent {
	
  // chart = [1,22,3];
  chart=[];

  constructor() { }

  ngOnInit() {
}
abc(){
  	let temp_max = [20,30,40,60];
    
  	 this.chart = new Chart("canvas1", {
          type: 'line',
          data: {
            labels:  ["One", "Two", "Tree", "Four", "Five", "Six", "Seven"],
            datasets: [
              {
                label: "Numbers !",
                fill: true,
                backgroundColor: "orange",
                borderColor: "tomato",
                data: [1, 2, 3, 4, 5, 6, 7],
                hoverColor : "green"
              },
            
            ]
          },
          options: {
        title: {
            fontSize: 20,
            display: true,
            text: 'My First Chart !'
        }
    }
  })
}



}
