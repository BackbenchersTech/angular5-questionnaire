import { Component, OnInit } from '@angular/core';

import { AdminService } from '../admin.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	usersData: any = [] ;
	surveysData: any = [];
	colHeaders : any;
	result: any;
	p: number = 1;
	constructor(private adminService: AdminService, private router: Router) { }

	ngOnInit() {
		this.getData();
	}
	  showResults() {
      this.router.navigate(['admin','survey-result']);
    }

	getData() {
		this.adminService.formAnswersObject();
		this.adminService.getUsersAndSurvey().subscribe(
			data => {
				this.usersData = data[0];
				this.surveysData = data[1];
				// console.log(this.usersData.users);
				console.log(this.surveysData.surveys);

				let a = this.surveysData.surveys;
				for(let i=0; i<a.length; i++) {
					a[i].surveyData.userId = a[i].userId;
					a[i]= a[i].surveyData;
				}

				 this.result = this.usersData.users.map(val => {
   					return Object.assign({}, val, a.filter(v => v.userId === val._id)[0]);
				});
				 this.colHeaders = Object.keys(this.result[3]);
			 	 this.colHeaders.splice(0,2);
			 	 this.colHeaders.splice(6,1);
			 	 this.colHeaders.splice(16,1);
			 	 console.log(this.colHeaders);
			 	 
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
