import { LightningElement, api } from "lwc";

export default class UdemyChildComponent extends LightningElement {
  @api message;
  @api cardHeading;
  @api number;
  @api isValid;

  @api carousalDetails;
  @api progressValue;
  @api detail;

  val = 20;

  onChangeHandler(event) {
    this.val = event.target.value;
  }

  @api resetSlider() {
    this.val = 50;
  }
}
