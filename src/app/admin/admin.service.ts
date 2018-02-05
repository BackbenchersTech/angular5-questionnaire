import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // import headers for post requests (as in surveyservice)
import { Observable } from 'rxjs/Observable';
// import observable this way and load methods individully or directly import observable from rxjs/Rx and no indy methods
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) { }

  getUsersAndSurvey(): any {
    return Observable.forkJoin(
      this.http.get('http://localhost:3500/api/users'),
      this.http.get('http://localhost:3500/api/data')
    )
  }

}
