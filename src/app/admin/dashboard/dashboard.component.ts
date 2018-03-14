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
	gift:any = [];
	colHeaders : any;
	result: any;
	selectedRow: any;
	p: number = 1;
	r: number = 1;
	columnNames : any;
	giftResult: any;
	giftResultData: any;
	giftResultColumns: any;
	giftResultColHeaders: any;
	assign: any;

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
				this.gift = data[3];
				// console.log(this.giftData.giftCodes);
				let x = this.giftData.giftCodes;
				for (let i = 0; i < x.length; i++) {
					x[i].userId;
					// console.log(x[i].userId);
				}
				let y = this.gift.gifts;
				for (let i = 0; i < y.length; i++) {
					y[i].userId;
					// console.log(y[i].userId);
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
				this.giftResultData = this.giftResult.map(val => {
					return Object.assign({}, val, y.filter(v => v.userId === val.userId)[0]);
				});
				// console.log(this.giftResult);
				// console.log(this.giftResultData);
				 this.result = this.usersData.users.map(val => {
   					return Object.assign({}, val, a.filter(v => v.userId === val._id)[0]);
				});
				//  console.log(this.result);
				this.giftResultColumns = {
					"fname": "First Name",
					"lname": "Last Name",
					"email": "E-mail",
					"giftCode": "Gift Code",
					"assignedGift":"Gift"
				}
				// this.giftResultColumns = {
				// 	actions: false,
				// 	columns: {
				// 		fname: {
				// 			title: 'First Name',
				// 			filter: false
				// 		},
				// 		lname: {
				// 			title: 'Last Name',
				// 			filter: false
				// 		},
				// 		email: {
				// 			title: 'E-mail',
				// 			filter: false
				// 		},
				// 		giftCode: {
				// 			title: 'Gift Code',
				// 			filter: false
				// 		},
				// 		actions: {
				// 			title: "Actions",
				// 			filter: false
				// 		},

				// 	}
				// };

				// this.columnNames = {
				// 	actions: false,
				// 	columns: {
				// 		fname: {
				// 			title: 'First Name',
				// 			filter: false
				// 		},
				// 		lname: {
				// 			title: 'Last Name',
				// 			filter: false
							
				// 		},
				// 		company: {
				// 			title: 'Company',
				// 			filter: false
				// 		},
				// 		role: {
				// 			title: 'Role',
				// 			filter: false
				// 		},
				// 		email: {
				// 			title: 'E-mail',
				// 			filter: false
				// 		},
				// 		phone: {
				// 			title: 'Phone',
				// 			filter: false
				// 		},
				// 		"Are you a partner or sponsor?": {
				// 			title: 'Partners/Sponsers',
				// 			filter: false
				// 		},
				// 		"In what areas do you have extensive practices?": {
				// 			title: 'Interested Areas',
				// 			filter: false
				// 		},
				// 		"Which featured sessions are you looking forward to attend?": {
				// 			title: 'Interested Featured Sessions',
				// 			filter: false
				// 		},
				// 		"Are you interested in any Labs/Certifications/DevZone?": {
				// 			title: 'Labs/Certifications/DevZone',
				// 			filter: false
				// 		},
				// 		"Whose addresses are you interested in?": {
				// 			title: 'Interested Speakers',
				// 			filter: false
				// 		},
				// 		"Which areas have you explored on the IBM Think campus?": {
				// 			title: 'Places on IBM think campus',
				// 			filter: false
				// 		},
				// 		"Where are you staying for the event?": {
				// 			title: 'Hotel Stay in',
				// 			filter: false
				// 		}
				// 	},
				// 	pager: {
				// 		perPage: 5
				// 	}
				// };

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

	setClickedRow(x){
		this.selectedRow = x;
		console.log(x.giftCode);
	}

	assignGift(selectedRow){
		let body = {
			uid : this.selectedRow.userId,
			gift: this.assign
		}
		console.log(body);
		this.adminService.saveGift(body).subscribe(res => {
			console.log("Success");
		},
			error => {
				console.log(error)
			})
	}

}
