import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SurveyService } from '../survey.service';
import { QuestionsService } from '../../questions.service';
import { User } from '../user';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {

  constructor(private surveyService: SurveyService, 
              private questionsService: QuestionsService,
              private route: ActivatedRoute,
              private router: Router ) { }
  
  id: number;
  private sub: any;

  signupStatus = true; // dev change to false when done
  user = new User('Abhishek', 'Piedy', 'OpenLogix Corporation', 'Developer', 'asd', 'asd'); // dev remove later 
  question = {};
  
  ngOnInit() {
    // this.checkSignup();
    // this.getUserDets();
    this.sub = this.route.params.subscribe(res => {
      this.id = +res.id;
      this.getQuestion();
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  checkSignup() {
    this.signupStatus = this.surveyService.isUserSet();
  }
  
  getUserDets() {
    this.user = this.surveyService.getCurrentUser();
  }

  getQuestion() {
    this.question = this.questionsService.getQuestion(this.id);
  }

  nextQuestion() {
    let a = 4;
    this.router.navigate(['survey', 'questionnaire', a]);
  }

}
