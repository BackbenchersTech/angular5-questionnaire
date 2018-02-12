import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  
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
    this.surveyService.saveUser(this.user).subscribe(res => {
      this.surveyService.setCurrentUser(this.user, res.uid);
      this.router.navigate(['survey','questionnaire']);
    },
    error => {
      console.log(error)
    })
  }
  
  ngOnInit() {
  }

}
