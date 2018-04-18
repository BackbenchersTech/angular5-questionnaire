import { Injectable } from "@angular/core";

@Injectable()
export class SurveyQuestions {
    public questions = {
        completedHtml: "<div class='completeText'><p>Thanks for joining us!</p><h6>Open-Logix Corporation</h6></div>",
      pages: [
        {
          name: "Question 1",
          elements: [
            {
              type: "radiogroup",
              name: "What are your thoughts on the over all event?",
              isRequired: true,
              choices: [
                "Amazing! Loved it.",
                "It was pretty good, most of the information was helpful or relative to me.",
                "I am somewhere in the middle.",
                "Somewhat valuable but not really what I was expecting / interested in.",
                "Disappointed."
              ]
            }
          ]
        },
        {
          name: "Question 2",
          elements: [
            {
              type: "radiogroup",
              name: "What are your thoughts on the event location and food options?",
              isRequired: true,
              choices: [
                "Perfect",
                "Good",
                "OK",
                "Disappointing"
              ]
            }
          ]
        },
        {
          name: "Question 3",
          elements: [
            {
              type: "checkbox",
              name: "What sessions/topics did you find valuable? (Please select all that apply)",
              isRequired: true,
              choices: [
                "IBM MQ & Integration Update: What Integration looks like today w/ Ray",
                "Using Trusted Spaces to Manage your Middleware Environment w/ Pete",
                "IBM MQ Deep Dive w/ Greg",
                "App Connect Enterprise: What is it? w/ Ray",
                "Wrap-up and upcoming events update w/ Krista"
              ]
            }
          ]
        },
        {
          name: "Question 4",
          elements: [
            {
              type: "checkbox",
              name: "What other technologies mentioned in the 'IBM MQ & Integration Update: What Integration looks like today' would you be interested in learning more about? (Please select all that apply)",
              isRequired: true,
              choices: [
                "Aspera FASP Technology",
                "API Connect",
                "App Connect Enterprise",
                "IBM DataPower Gateway",
                "None"
              ]
            }
          ]
        },
        {
          name: "Question 5",
          elements: [
            {
              type: "radiogroup",
              name: " If OpenLogix did a similar event but on different technologies, would you be interested in attending and/or willing to suggest to colleagues?",
              isRequired: true,
              choices: [
                "Yes",
                "No"
              ]
            }
          ]
        },
        {
          name: "Question 6",
          elements: [
            {
              type: "checkbox",
              name: "What are some other areas of interest you and/or your company has? (Please select all that apply)",
              isRequired: true,
              choices: [
                "Enterprise Mobility / Mobile Apps",
                "Cloud",
                "Blockchain",
                "Watson technologies",
                "Analytics"
              ]
            }
          ]
        },
        {
          name: "Question 7",
          elements: [
            {
              type: "comment",
              name: "Please share with us any other comments or questions you have.",
              isRequired: true
            }
          ]
        }
      ],
        showPrevButton: false,
        showQuestionNumbers: "off",
        completeText: "Complete Survey",
        requiredText: "",
        
    };
}
