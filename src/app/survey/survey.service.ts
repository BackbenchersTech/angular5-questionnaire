import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SurveyQuestions } from '../survey-questions';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SurveyService {

  currentUser:any = {};
  surveyQuestions = this.sqs.questions;
  
  constructor(private http: HttpClient, private sqs: SurveyQuestions) { }

  setCurrentUser(user, uid): any {
    this.currentUser = user;
    this.currentUser.uid = uid;
  }

  saveUser(user): any {
    return this.http.post('https://angular5-questionnaire.herokuapp.com/api/users', user, httpOptions)
  }
  
  getCurrentUser(): any {
    return this.currentUser;
  }

  isUserSet(): any {
    if (Object.keys(this.currentUser).length > 0) {
      return true;
    }
    return false;
  }

  getQuestions(): any {
    return this.surveyQuestions;
  }

  sendEmail(email): any {
    return this.http.post("http://localhost:3500/send", email, httpOptions)
  }
  
  saveSurvey(survey): any {
    return this.http.post('https://angular5-questionnaire.herokuapp.com/api/data', survey, httpOptions)
  }

}
