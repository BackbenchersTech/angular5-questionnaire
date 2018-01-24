import { Injectable } from '@angular/core';

@Injectable()
export class SurveyService {
  
  currentUser = {};

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

}
