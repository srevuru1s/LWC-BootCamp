import { LightningElement, track } from "lwc";

export default class TechJourneyBootcamp extends LightningElement {
  greeting = "Hello";
  @track welcome = "Learn SF LWC";

  clickHandler(event) {
    this.greeting = "Namskar";
    this.welcome = "Im getting confident on LWC";
  }

  @track myDetails = { fname: "Sagar", lname: "Revuru" };

  clickHandler2(event) {
    this.myDetails.fname = "LWC Sagar";
    this.myDetails.lname = "Slow and study consistance";
  }
  @track myArray = [2024, 2025, 2026, 2027];
  clickHandler3(event) {
    this.myArray = [...this.myArray, 2028];
  }
}
