import { Component, OnInit } from '@angular/core';

import { AdminService } from '../admin.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	usersData: Object = {};
	surveysData: Array<Object> = [];
	chart = [];

	constructor(private adminService: AdminService) { }

	ngOnInit() {
		this.getData();
	}

	getData() {
		this.adminService.formAnswersObject();
		this.adminService.getUsersAndSurvey().subscribe(
			data => {
				this.usersData = data[0];
				this.surveysData = data[1];
			},
			err => {
				console.log(err);
			},
			() => {
				this.adminService.countSurveys(this.surveysData);
				this.surveysData = this.adminService.getData();
				this.makeCharts();
			}
		);
	}

	makeCharts() {
		this.chart = new Chart('canvas', {
			type: 'pie',
			data: {
			  labels: ["Yes", "No"],
			  datasets: [
				{
				  data: [this.surveysData["Are you willing to check what we offer in these areas?"]["Yes"], this.surveysData["Are you willing to check what we offer in these areas?"]["No"]],
				  borderColor: 'White',
				  backgroundColor:['Red','Yellow'],
				  fill: false
				}
			  ]
			}
		  })
	}

}
