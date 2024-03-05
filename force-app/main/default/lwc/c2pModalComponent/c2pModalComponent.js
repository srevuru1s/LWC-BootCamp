import { LightningElement } from "lwc";

export default class C2pModalComponent extends LightningElement {
  closeHandler(event) {
    const myEvent = new CustomEvent("close", {
      detail: {
        mess: "model obj got closed successfully"
      }
    });
    this.dispatchEvent(myEvent);
  }
}
