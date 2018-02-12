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
	column : any;
	constructor(private adminService: AdminService, private router: Router) { }

	ngOnInit() {
		this.getData();
	}

	showResults() {
      this.router.navigate(['admin','questions']);
    }

	getData() {
		this.adminService.formAnswersObject();
		this.adminService.getUsersAndSurvey().subscribe(
			data => {
				this.usersData = data[0];
				this.surveysData = data[1];
				let a = this.surveysData.surveys;
				for(let i=0; i<a.length; i++) {
					a[i].surveyData.userId = a[i].userId;
					a[i]= a[i].surveyData;
				}

				 this.result = this.usersData.users.map(val => {
   					return Object.assign({}, val, a.filter(v => v.userId === val._id)[0]);
				});
				 this.colHeaders = Object.keys(this.result[0]);
				//  console.log(this.colHeaders);
			 	//  this.colHeaders.splice(0,2);
			 	//  this.colHeaders.splice(6,1);
				  // this.colHeaders.splice(16,1);
				  this.column = ["FirstName","LastName","Company","Role","Email","Phone","Purpose of Visit"];
			 	 
			},
			err => {
				console.log(err);
			},
			() => {
				this.adminService.countSurveys(this.surveysData);
				this.surveysData = this.adminService.getData();
			}
		);
	}

}
