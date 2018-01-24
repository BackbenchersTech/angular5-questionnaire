import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  categories = ['Developer', 'Sales', 'Recruiter', 'HR'];

  user = new User('', '', '', '', '', '');

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newUser() {
    this.user = new User('', '', '', '', '', '');
  }

  saveCustomer() {
    console.log("From Component:", this.user);
    this.surveyService.setCurrentUser(this.user);
  }
  
  constructor(private surveyService: SurveyService) { }

  ngOnInit() {
  }

}
