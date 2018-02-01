import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';
import * as Survey from 'survey-angular';
import { SurveyService } from '../survey.service';
import { User } from '../user';

Survey.Survey.cssType = "bootstrap";

function sendDataToServer(survey) {
  //send Ajax request to your web server.
  alert("The results are:" + JSON.stringify(survey.data));

}
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
    var survey = new Survey.Model(this.questions);
    survey.onComplete.add(sendDataToServer);
    Survey.SurveyNG.render("surveyElement", { model: survey });
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
