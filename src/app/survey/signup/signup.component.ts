import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(private surveyService: SurveyService, private router: Router) { }
  
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
    if(this.surveyService.setCurrentUser(this.user)) {
      this.router.navigate(['survey','questionnaire',1]);
    }
  }
  
  ngOnInit() {
  }

}
