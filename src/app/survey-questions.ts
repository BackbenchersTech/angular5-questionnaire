import { Injectable } from "@angular/core";

@Injectable()
export class SurveyQuestions {
    public questions = {
        completedHtml: "<div class='completeText'><h5>Success</h5><p>Check your inbox for the gift.</p><p>Thank you</p><h6>Open-Logix Corporation</h6></div>",
      pages: [
        {
          name: "Question 1",
          elements: [
            {
              type: "radiogroup",
              name: "Are you partners/sponsers?",
              isRequired: true,
              choices: [
                "Yes",
                "No"
              ]
            }
          ]
        },
        {
          name: "Question 2",
          elements: [
            {
              type: "checkbox",
              name: "Which of the following areas are you interested in ?",
              isRequired: true,
              choices: [
                "Clous and Data",
                "Modern Infrastructure",
                "Security and Resiliency",
                "Business and AI"
              ]
            }
          ]
        },
        {
          name: "Question 3",
          elements: [
            {
              type: "checkbox",
              name: "Which of the following featured sessions are you interested in?",
              isRequired: true,
              choices: [
                "Chairman's Address",
                "Think Keynotes",
                "Innovation Talks",
                "Philanthropy and Citizenship"
              ]
            }
          ]
        },
        {
          name: "Question 4",
          elements: [
            {
              type: "radiogroup",
              name: "Are you interested in Labs/Certifications/DevZone?",
              isRequired: true,
              choices: [
                "Yes",
                "No"
              ]
            }
          ]
        },
        {
          name: "Question 5",
          elements: [
            {
              type: "checkbox",
              name: "Which of the following speakers are you interested in?",
              isRequired: true,
              hasOther: true,
              choices: [
                "Ginni Rometty ",
                "Maya Leibman",
                "Gary Reedy",
                "Arvind Krishna"
              ]
            }
          ]
        },
        {
          name: "Question 6",
          elements: [
            {
              type: "checkbox",
              name: "Which places have to visited on IBM think campus?",
              isRequired: true,
              choices: [
                "Thinks Tanks",
                "Theater",
                "Networking events",
                "Demonstrations",
                "Entertainment",
                "Food + Beverage"
              ]
            }
          ]
        },
        {
          name: "Question 7",
          elements: [
            {
              type: "checkbox",
              name: "Which hotel did you book to stay for this event?",
              isRequired: true,
              hasOther: true,
              choices: [
                "MGM Grand Hotel",
                "Manadalay Resort & Casino",
                "Bellagio",
                "Delano Las Vegas",
                "Luxor Las Vegas"
              ]
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
