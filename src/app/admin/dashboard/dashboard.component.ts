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
				let gCodes = this.giftData.giftCodes;
				for (let i = 0; i < gCodes.length; i++) {
					gCodes[i].userId;
				}
				let giftList = this.gift.gifts;
				for (let i = 0; i < giftList.length; i++) {
					giftList[i].userId;
				}
				let surveyList = this.surveysData.surveys;
				for (let i = 0; i < surveyList.length; i++) {
					surveyList[i].surveyData.userId = surveyList[i].userId;
					surveyList[i] = surveyList[i].surveyData;
				}
				this.result = this.usersData.users.map(val => {
					return Object.assign({}, val, surveyList.filter(v => v.userId === val._id)[0]);
				});
				this.giftResult = this.usersData.users.map(val => {
					return Object.assign({}, val, gCodes.filter(v => v.userId === val._id)[0]);
				});
				this.giftResultData = this.giftResult.map(val => {
					return Object.assign({}, val, giftList.filter(v => v.userId === val.userId)[0]);
				});
				
				this.giftResultColumns = {
					"fname": "First Name",
					"lname": "Last Name",
					"email": "E-mail",
					"giftCode": "Gift Code",
					"assignedGift":"Gift"
				}

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
					"Where are you staying for the event?": "Hotel Stay in"

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

	assignGift(){
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
