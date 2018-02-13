import { Injectable } from "@angular/core";

@Injectable()
export class SurveyQuestions {
    public questions = {
        completedHtml: "<div class='completeText'>Thank you for taking your time to answer our questions.</div>",
        pages: [
          {
            name: "Question 1",
            elements: [
              {
                type: "checkbox",
                name: "What is your purpose to visit IBM Think?",
                isRequired: true,
                hasOther: true,
                choices: [
                  "Networking",
                  "Sales/Marketing",
                  "Developing",
                  "Option 4"
                ]
              }
            ]
          },
          {
            name: "Question 2",
            elements: [
              {
                type: "checkbox",
                name: "What technologies are you interested in?",
                visible: false,
                visibleIf: "{What is your purpose to visit IBM Think?} notempty",
                isRequired: true,
                hasOther: true,
                choices: [
                  "Cloud",
                  "Customer Engagements",
                  "Data & Analytics",
                  "IBM Research",
                  "Internet of Things",
                  "IT Infrastructure",
                  "Mobile",
                  "Security",
                  "Watson",
                  "Collaboration"
                ]
              }
            ]
          },
          {
            name: "Question 3",
            elements: [
              {
                type: "radiogroup",
                name: "Are you using any framework/platform now?",
                visible: false,
                visibleIf: "{What technologies are you interested in?} notempty",
                isRequired: true,
                choices: [
                  "Yes",
                  "No"
                ]
              }
            ]
          },
          {
            name: "Question 4",
            elements: [
              {
                type: "comment",
                name: "Which platforms are you using?",
                visible: false,
                visibleIf: "{Are you using any framework/platform now?} = 'Yes'",
                isRequired: true
              }
            ]
          },
          {
            name: "Question 5",
            elements: [
              {
                type: "radiogroup",
                name: "Are you willing to migrate to one?",
                visible: false,
                visibleIf: "{Are you using any framework/platform now?} = 'No'",
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
                name: "Which platform would you be willing to go to?",
                visible: false,
                visibleIf: "{Are you willing to migrate to one?} = 'Yes'",
                isRequired: true,
                hasOther: true,
                choices: [
                  "IBM",
                  "Microsoft",
                  "Intel"
                ]
              }
            ]
          },
          {
            name: "Question 7",
            elements: [
              {
                type: "checkbox",
                name: "Are you using any IBM products now?",
                visible: false,
                visibleIf: "{Which platforms are you using?} notempty or {Are you willing to migrate to one?} = 'No'",
                isRequired: true,
                hasOther: true,
                choices: [
                  "Watson Internet of Things Platform",
                  "IBM Security Access Manager for DataPower",
                  "Cognos Analytics",
                  "IBM Connections"
                ]
              }
            ]
          },
          {
            name: "Question 8",
            elements: [
              {
                type: "radiogroup",
                name: "Are you willing to check what we offer in these areas?",
                visible: false,
                visibleIf: "{Which platform would you be willing to go to?} notempty or {Are you using any IBM products now?} notempty",
                isRequired: true,
                choices: [
                  "Yes",
                  "No"
                ]
              }
            ]
          },
          {
            name: "Question 9",
            elements: [
              {
                type: "checkbox",
                name: "What kind of services are you looking  for?",
                visible: false,
                visibleIf: "{Are you willing to check what we offer in these areas?} = 'Yes'",
                isRequired: true,
                choices: [
                  "On-site",
                  "Remote",
                  "Off-shore"
                ]
              }
            ]
          },
          {
            name: "Question 10",
            elements: [
              {
                type: "dropdown",
                name: "How many days are you going to stay here?",
                visible: true,
                // visibleIf: "{What kind of services are you looking  for?} notempty or {Are you willing to check what we offer in these areas?} = 'No'",
                isRequired: true,
                choices: [
                  "1",
                  "2",
                  "3"
                ]
              }
            ]
          }
        ],
        showPrevButton: false,
        showQuestionNumbers: "off",
        completeText: "Complete Survey",
        requiredText: ""
    };
}
