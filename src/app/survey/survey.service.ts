import { Injectable } from '@angular/core';

@Injectable()
export class SurveyService {
  
  currentUser = {};

  constructor() { }

  setCurrentUser(user): void {
    console.log("Service Param:", user);
    this.currentUser = user;
    console.log("From Service:", this.currentUser);
  }
}
