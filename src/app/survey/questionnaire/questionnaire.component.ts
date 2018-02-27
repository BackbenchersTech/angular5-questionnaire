import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import * as SurveyJs from 'survey-angular';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  questions: any;
  signupStatus = true;
  width: any = 0;
  user:any = {};
  apiRoot: string = "http://localhost:3500/api/send"; 
 
  constructor(private surveyService: SurveyService,
              private router: Router,private http: Http ) { }  
  
  ngOnInit() {
    SurveyJs.Survey.cssType = "bootstrap";
    this.checkSignup();
    this.getUserDets();
    this.getQuestions();
    var survey = new SurveyJs.Model(this.questions);
    survey.onComplete.add(result => {
      this.submitSurvey(result);
    });
    const pagesValue = [];
    SurveyJs.SurveyNG.render("survey", { model: survey, onCurrentPageChanged: this.doOnCurrentPageChanged});
    this.doOnCurrentPageChanged(survey, this);
  }

  doOnCurrentPageChanged(survey, a) {
      a.width = ((survey.currentPage.visibleIndex + 1) / survey.PageCount) * 100;
      document.getElementById('progress-bar').style.width = a.width + '%';
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
    
    let body = {
      email : this.user.email
    } ;
    // let url = `${this.apiRoot}`;
    // console.log(url);

  // this.http.post(url, {email:data.email}).subscribe(res => console.log(res));
  this.surveyService.sendEmail(body).subscribe(res => {
      console.log(res);
    },
    error => {
      console.log(error);
    }
  ) 

    this.surveyService.saveSurvey(data).subscribe(res => {
      console.log(res);
    },
    error => {
      console.log(error);
    }
  )
  }

}
