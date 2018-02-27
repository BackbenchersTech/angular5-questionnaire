import { Component } from '@angular/core';
import { Router, NavigationEnd, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { 
    this.router.events.subscribe(
      ( event: NavigationEvent ) : void => {
        if ( event instanceof NavigationEnd ) {
          this.home = this.router.isActive("/survey/signup", true);
          this.questionsGroup = this.router.isActive("/admin/questions", true);

        }
      }
    )
  }

  title = 'OpenLogix @IBM Think';
  url = this.router.url;
  home: any;
  questionsGroup : any;
}
