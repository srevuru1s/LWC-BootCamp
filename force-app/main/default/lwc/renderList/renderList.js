import { LightningElement } from "lwc";

export default class RenderList extends LightningElement {
  superstars = ["Spiderman", "Superman", "Iron-Man", "Hulk", "Ice-Man"];

  contactlist2 = [
    {
      id: 1,
      firstname: "Mark2",
      lastname: "Benioff"
    },
    {
      id: 2,
      firstname: "Salesforce2",
      lastname: "Benioff"
    },
    {
      id: 3,
      firstname: "Service2",
      lastname: "Benioff"
    }
  ];

  contactlist = [
    {
      id: 1,
      firstname: "Mark",
      lastname: "Benioff"
    },
    {
      id: 2,
      firstname: "Salesforce",
      lastname: "Benioff"
    },
    {
      id: 3,
      firstname: "Service",
      lastname: "Benioff"
    }
  ];
}
