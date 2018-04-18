import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  signupStatus = true;
  width: any = 0;
  user:any = {};
  giftCode: any;
 
  constructor(private surveyService: SurveyService,
              private router: Router) { }  
  
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
    
    this.surveyService.saveSurvey(data).subscribe(res => {
        console.log(res);
      },
      error => {
        console.log(error);
      },
      () => {
        this.giftCode = Math.floor(100000 + Math.random() * 900000);
        let giftCode = {
          uid: this.user.uid,
          giftCode: this.giftCode
        };
        // this.surveyService.saveCode(giftCode);
        this.sendEmail();
      }
    )
  }

  sendEmail() {
    let body = {
      email: this.user.email,
      name: this.user.fname +" " + this.user.lname,
      // code: this.giftCode
    };

    this.surveyService.sendEmail(body).subscribe(res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    )
  }

}
