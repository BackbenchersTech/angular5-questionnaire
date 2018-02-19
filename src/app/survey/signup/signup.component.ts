import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user';
import { SurveyService } from '../survey.service';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  constructor(private surveyService: SurveyService, 
              private router: Router,
              private location: LocationService) { }
  
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
    // this.location.getLocationStatus();
  }

}
