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
	columnNames : any;
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
				// console.log(this.colHeaders);
				// this.colHeaders.splice(0,2);
				// this.colHeaders.splice(6,1);
				// this.colHeaders.splice(14,1);
				this.columnNames = {
					"fname": "First Name",
					"lname": "Last Name",
					"company": "Company",
					"role": "Role",
					"email": "E-mail",
					"phone": "Phone",
					"What is your purpose to visit IBM Think?": "Purpose",
					"What technologies are you interested in?": "Technology interest",
					"Are you using any framework/platform now?": "Using platforms?",
					"Which platforms are you using?": "Current Platforms",
					"Are you willing to migrate to one?": "Will Migrate?",
					"Which platform would you be willing to go to?": "Interested to migrate to",
					"Are you using any IBM products now?": "Using IBM Products?",
					"Are you willing to check what we offer in these areas?": "Check our offers?",
					"What kind of services are you looking  for?": "Services looking for",
					"How many days are you going to stay here?": "Days Left"
				}
				this.colHeaders = Object.keys(this.columnNames);
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
