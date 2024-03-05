import { LightningElement } from "lwc";

export default class LwcComponentTwo extends LightningElement {
  displayMessage = true;
  changeHandler() {
    //*toggle handling in JS
    this.displayMessage = !this.displayMessage;
  }
}
