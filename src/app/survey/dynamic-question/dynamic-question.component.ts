import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-question',
  templateUrl: './dynamic-question.component.html',
  styleUrls: ['./dynamic-question.component.css']
})
export class DynamicQuestionComponent implements OnInit {

  @Input() question: any;

  constructor() { }

  ngOnInit() {
    console.log(this.question);
  }

}
