import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

import { SurveyService } from '../survey.service';
import { User } from '../user';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questions: any;
  signupStatus = true; // dev change to false when done
  user = new User('Abhishek', 'Piedy', 'OpenLogix Corporation', 'Developer', 'asd', 'asd'); // dev remove params later 

  constructor(private surveyService: SurveyService,
              private router: Router ) { }  
  
  ngOnInit() {
    // this.checkSignup();
    // this.getUserDets();
    this.getQuestions();
    console.log(this.questions);
  }

  checkSignup() {
    this.signupStatus = this.surveyService.isUserSet();
  }
  
  getUserDets() {
    this.user = this.surveyService.getCurrentUser();
  }

  getQuestions() {
    this.questions = this.surveyService.getQuestions();
  }

}
