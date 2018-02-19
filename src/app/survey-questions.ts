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
              name: "Are you a partner or sponsor?",
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
              name: "In what areas do you have extensive practices?",
              isRequired: true,
              choices: [
                "Cloud and Data",
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
              name: "Which featured sessions are you looking forward to attend?",
              isRequired: true,
              choices: [
                "Chairman's Address",
                "Think Keynotes",
                "Innovation Talks",
                "Philanthropy & Citizenship"
              ]
            }
          ]
        },
        {
          name: "Question 4",
          elements: [
            {
              type: "radiogroup",
              name: "Are you interested in any Labs/Certifications/DevZone?",
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
              name: "Whose addresses are you interested in?",
              isRequired: true,
              hasOther: true,
              choices: [
                "Ginni Rometty",
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
              name: "Which areas have you explored on the IBM Think campus?",
              isRequired: true,
              choices: [
                "Think Tanks",
                "Theater",
                "Networking events",
                "Demonstrations",
                "Entertainment",
                "Food & Beverage"
              ]
            }
          ]
        },
        {
          name: "Question 7",
          elements: [
            {
              type: "checkbox",
              name: "Where are you staying for the event?",
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
