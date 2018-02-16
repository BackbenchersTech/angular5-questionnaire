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
				this.columnNames = {
					"fname": "First Name",
					"lname": "Last Name",
					"company": "Company",
					"role": "Role",
					"email": "E-mail",
					"phone": "Phone",
					"Are you partners/sponsers?": "Partners/Sponsers",
					"Which of the following areas are you interested in ?": "Interested Areas",
					"Which of the following featured sessions are you interested in?": "Interested Featured Sessions",
					"Are you interested in Labs/Certifications/DevZone?": "Labs/Certifications/DevZone",
					"Which of the following speakers are you interested in?": "Interested Speakers",
					"Which places have to visited on IBM think campus?": "Places on IBM think campus",
					"Which hotel did you book to stay for this event?": "Hotel Stay in",
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
