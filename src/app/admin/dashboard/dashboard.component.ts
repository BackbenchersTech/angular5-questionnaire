import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	apiRoot: string = "http://localhost:3001/api/users";
	data : any;
	constructor(private http: HttpClient) { }
	ngOnInit() {
	}
	doGET() {
	  	console.log("GET");
	  	let url = `${this.apiRoot}`;
	 	this.http.get(url).subscribe(res => {
	  		this.data = res;
			this.test();
		});
	}
	test(){
	  	// body...
	 	console.log(this.data);
	}


}
