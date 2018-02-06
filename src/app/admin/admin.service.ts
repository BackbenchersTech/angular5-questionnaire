import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // import headers for post requests (as in surveyservice)
import { Observable } from 'rxjs/Observable';
// import observable this way and load methods individully or directly import observable from rxjs/Rx and no indy methods
import 'rxjs/add/observable/forkJoin';

import { SurveyQuestions } from '../survey-questions';

@Injectable()
export class AdminService {

  answers: any = {};

  constructor(private http: HttpClient,
              private sqs: SurveyQuestions) { }

  getUsersAndSurvey(): any {
    return Observable.forkJoin(
      this.http.get('http://localhost:3500/api/users'),
      this.http.get('http://localhost:3500/api/data')
    );
  }

  formAnswersObject(): any {
    let sQues = this.sqs.questions.pages;
    for(let i = 0; i < sQues.length; i++) {
      let page = sQues[i];
      for(let j = 0; j < page.elements.length; j++) {
        let question = page.elements[j].name;
        if(page.elements[j]["choices"] !== undefined) {
          let qChoices = page.elements[j]["choices"];
          let choices = {};
          for(let c in qChoices){
            choices[qChoices[c]] = 0;
          }
          if(page.elements[j]["hasOther"]) {
            choices["other"] = 0;
          }
          this.answers[question] = choices;
        }
        else {
          this.answers[question] = [];
        }
      }
    }
  }

  countSurveys(surveysData): any {
    for(let i = 0; i < surveysData.surveys.length; i++) {
      let survey = surveysData.surveys[i].surveyData;
      for( let q in survey) {
        if(this.answers[q] !== undefined) {
          if(typeof(survey[q]) === "object") {
            for(let c = 0; c < survey[q].length; c++) {
              this.answers[q][survey[q][c]]++;
            }
          }
          else if(survey[q] === "Yes" || survey[q] === "No") {
            this.answers[q][survey[q]]++;
          }
          else {
            this.answers[q] = survey[q];
          }
        }
      }
    }
  }

  getData(): any {
    return this.answers;
  }

}
