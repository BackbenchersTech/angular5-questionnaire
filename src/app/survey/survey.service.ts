import { Injectable } from '@angular/core';

@Injectable()
export class SurveyService {
  
  currentUser = {};
  surveyQuestions = {};

  constructor() { }

  setCurrentUser(user): any {
    this.currentUser = user;
    return true;
  }

  isUserSet(): any {
    if( Object.keys(this.currentUser).length > 0 ) {
      return true;
    }
    return false;
  }

  getCurrentUser(): any {
    return this.currentUser;
  }

  getQuestions(): any {
    return this.surveyQuestions;
  }

}
