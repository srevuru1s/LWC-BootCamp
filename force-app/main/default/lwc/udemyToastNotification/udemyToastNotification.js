import { LightningElement } from "lwc";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class UdemyToastNotification extends LightningElement {
  toastHandler() {
    this.showToast(
      "Toast Title Success",
      "{0} Toast Message Success {1}",
      "success",
      "sticky"
    );
  }

  toastHandler2() {
    this.showToast(
      "Toast Title Error",
      "Toast Message Error",
      "error",
      "sticky"
    );
  }
  toastHandler3() {
    this.showToast("Toast Title Info", "Toast Message Info", "info", "sticky");
  }
  toastHandler4() {
    this.showToast(
      "Toast Title Warning",
      "Toast Message Warning",
      "warning",
      "sticky"
    );
  }
  showToast(title, message, variant, mode) {
    const event = new ShowToastEvent({
      title,
      message,
      variant,
      messageData: [
        "Salesforce",
        { label: "click Here", url: "https://www.salesforce.com/" }
      ],
      mode
    });
    this.dispatchEvent(event);
  }
}
