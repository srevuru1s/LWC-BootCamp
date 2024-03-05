import { LightningElement } from "lwc";

export default class ParentComponent extends LightningElement {
  //* if we are not defining it will be private
  greeting = "Welcome to LWC Boot Camp";

  motivation = "Perfection will come only on practiese";

  userdetials = {
    firstname: "Sagar",
    lastname: "Object Revuru",
    channel: "LWC Boot Camp"
  };

  tagoflife = "Knowledge is Wealth";
}
