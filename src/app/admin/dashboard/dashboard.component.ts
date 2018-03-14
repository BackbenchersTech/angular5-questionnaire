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
	giftData: any = [];
	colHeaders : any;
	result: any;
	p: number = 1;
	r: number = 1;
	columnNames : any;
	giftResult: any;
	giftResultColumns: any;
	giftResultColHeaders: any;

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
				this.giftData = data[2];
				console.log(this.giftData.giftCodes);
				let x = this.giftData.giftCodes;
				for (let i = 0; i < x.length; i++) {
					x[i].userId;
					console.log(x[i].userId);
				}
				let a = this.surveysData.surveys;
				for(let i=0; i<a.length; i++) {
					a[i].surveyData.userId = a[i].userId;
					a[i]= a[i].surveyData;
				}
				// this.giftResult = this.usersData.users;
				this.giftResult = this.usersData.users.map(val => {
					return Object.assign({}, val, x.filter(v => v.userId === val._id)[0]);
				});

				
				// console.log(this.giftResult.length);
				// for(let g in this.giftResult){
				// 	console.log(g);
				// 	if (this.giftResult[g].giftCode === undefined){
					
				// 		// console.log(this.giftResult.splice(g,1));
				// 	}
				// 	else {
				// 		console.log(this.giftResult[g].giftCode)
				// 	}
				// 	// console.log(this.giftResult[g]);
				// }
			
				 this.result = this.usersData.users.map(val => {
   					return Object.assign({}, val, a.filter(v => v.userId === val._id)[0]);
				});
				 // console.log(this.result);
				// this.giftResultColumns = {
				// 	"fname": "First Name",
				// 	"lname": "Last Name",
				// 	"email": "E-mail",
				// 	"giftCode": "Gift Code"
				// }
				this.giftResultColumns = {
					actions: false,
					columns: {
						fname: {
							title: 'First Name',
							filter: false
						},
						lname: {
							title: 'Last Name',
							filter: false
						},
						email: {
							title: 'E-mail',
							filter: false
						},
						giftCode: {
							title: 'Gift Code',
							filter: false
						},
						actions: {
							title: "",
							filter: false
						},

					}
				};
				this.columnNames = {
					"fname": "First Name",
					"lname": "Last Name",
					"company": "Company",
					"role": "Role",
					"email": "E-mail",
					"phone": "Phone",

					"Are you a partner or sponsor?": "Partners/Sponsers",
					"In what areas do you have extensive practices?": "Interested Areas",
					"Which featured sessions are you looking forward to attend?": "Interested Featured Sessions",
					"Are you interested in any Labs/Certifications/DevZone?": "Labs/Certifications/DevZone",
					"Whose addresses are you interested in?": "Interested Speakers",
					"Which areas have you explored on the IBM Think campus?": "Places on IBM think campus",
					"Where are you staying for the event?": "Hotel Stay in",
					// "signupTimestamp":"Time"

				}
				this.giftResultColHeaders = Object.keys(this.giftResultColumns);
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
