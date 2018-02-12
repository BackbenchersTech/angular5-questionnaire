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

  getSurvey(): any {
    return this.http.get('http://localhost:3500/api/data')
  }

  formAnswersObject(): any {
    const sQues = this.sqs.questions.pages;
    for (let i = 0; i < sQues.length; i++) {
      const page = sQues[i];
      for (let j = 0; j < page.elements.length; j++) {
        const question = page.elements[j].name;
        if (page.elements[j]['choices'] !== undefined) {
          let qChoices = page.elements[j]['choices'];
          let choices = {};
          for(let c in qChoices){
            choices[qChoices[c]] = 0;
          }
          if(page.elements[j]['hasOther']) {
            choices['other'] = 0;
          }
          this.answers[question] = choices;
          this.answers[question]["statBased"] = true;
        }
        else {
          this.answers[question] = [];
          this.answers[question]["answers"] = [];
          this.answers[question]["statBased"] = false;
        }
      }
    }
  }

  countSurveys(surveysData): any {
    for(let i = 0; i < surveysData.surveys.length; i++) {
      let survey = surveysData.surveys[i].surveyData;
      for( let q in survey) {
        if(this.answers[q] !== undefined) {
          if (this.answers[q].statBased) {
            if (typeof survey[q] === "object") {
              for(let c = 0; c < survey[q].length; c++) {
                this.answers[q][survey[q][c]]++;
              }
            }
            else {
              this.answers[q][survey[q]]++;
            }
          }
          else {
            this.answers[q]["answers"].push(survey[q]);
          }
        }
      }
    }
  }

  getData(): any {
    return this.answers;
  }

}