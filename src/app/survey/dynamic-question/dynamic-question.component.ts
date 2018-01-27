import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-dynamic-question',
  templateUrl: './dynamic-question.component.html',
  styleUrls: ['./dynamic-question.component.css']
})
export class DynamicQuestionComponent implements OnInit {

  @Input() question: any;
  @Output() notify: EventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.question);
  }

  onChange(a) {
    this.notify.emit(a);
  }

}
