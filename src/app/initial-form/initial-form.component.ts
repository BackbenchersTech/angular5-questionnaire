import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-initial-form',
  templateUrl: './initial-form.component.html',
  styleUrls: ['./initial-form.component.css']
})
export class InitialFormComponent implements OnInit {
  
  categories = ['Developer', 'Sales', 'Recruiter', 'HR'];

  user = new User('', '', '', '', '', '');

  submitted = false;

  constructor() { }

  onSubmit() {
    this.submitted = true;
  }

  newUser() {
    this.user = new User('', '', '', '', '', '');
  }

  get diagnostic() { return JSON.stringify(this.user); }

  ngOnInit() {
  }

}
