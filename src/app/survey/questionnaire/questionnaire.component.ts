import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import * as SurveyJs from 'survey-angular';

import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questions: any;
  signupStatus = false;
  user:any = {};

  constructor(private surveyService: SurveyService,
              private router: Router ) { }  
  
  ngOnInit() {
    SurveyJs.Survey.cssType = "bootstrap";
    this.checkSignup();
    this.getUserDets();
    this.getQuestions();
    var survey = new SurveyJs.Model(this.questions);
    survey.onComplete.add(result => {
      this.submitSurvey(result);
    });
    SurveyJs.SurveyNG.render("survey", { model: survey });
  }

  checkSignup() {
    this.signupStatus = this.surveyService.isUserSet();
    if(!this.signupStatus) {
      this.router.navigate(['survey', 'signup']);
    }
  }
  
  getUserDets() {
    this.user = this.surveyService.getCurrentUser();
  }

  getQuestions() {
    this.questions = this.surveyService.getQuestions();
  }

  submitSurvey(survey) {
    let data = {
      survey: survey.data,
      uid: this.user.uid
    };
    this.surveyService.saveSurvey(data).subscribe(res => {
      console.log(res);
    },
    error => {
      console.log(error);
    })
  }

}
