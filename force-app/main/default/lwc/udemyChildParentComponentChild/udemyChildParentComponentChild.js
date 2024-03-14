import { LightningElement } from "lwc";

export default class UdemyChildParentComponentChild extends LightningElement {
  closeHandler() {
    const myEvent = new CustomEvent("close", {
      detail: {
        message: "Model Closed Successfully"
      },
      bubbles: true
    });
    this.dispatchEvent(myEvent);
  }
  footerHandler() {
    console.log("Footer Handler Called");
  }
}
