import { Injectable } from '@angular/core';

@Injectable()
export class QuestionsService {

  questions = [
    {
      id: 1,
      type: "checkbox",
      question: "What are you interested in?",
      options: [
        {
          id: 1,
          option: "Mobile Applications"
        },
        {
          id: 2,
          option: "Web Applications"
        },
        {
          id: 3,
          option: "HR Solutions"
        },
        {
          id: 4,
          option: "Payroll Processing"
        }
      ],
      nextQuestion: 4
    },
    {
      id: 2,
      type: "radio",
      question: "What are you interested in?",
      options: [
        {
          id: 1,
          option: "Mobile Applications",
          nextQuestion: 1
        },
        {
          id: 2,
          option: "Web Applications",
          nextQuestion: 3
        },
        {
          id: 3,
          option: "HR Solutions",
          nextQuestion: 4
        },
        {
          id: 4,
          option: "Payroll Processing",
          nextQuestion: 5
        }
      ]
    },
    {
      id: 3,
      type: "dropdown",
      question: "What are you interested in?",
      options: [
        {
          id: 1,
          option: "Mobile Applications",
          nextQuestion: 5
        },
        {
          id: 2,
          option: "Web Applications",
          nextQuestion: 4
        },
        {
          id: 3,
          option: "HR Solutions",
          nextQuestion: 2
        },
        {
          id: 4,
          option: "Payroll Processing",
          nextQuestion: 1
        }
      ]
    },
    {
      id: 4,
      type: "textarea",
      question: "What are you interested in?",
      nextQuestion: 2
    },
    {
      id: 5,
      type: "textarea",
      question: "What are you interested in?"
    }
  ];

  constructor() { }

  getQuestion(qid): any {
    return this.questions.find(q => q.id === +qid);
  }

}
