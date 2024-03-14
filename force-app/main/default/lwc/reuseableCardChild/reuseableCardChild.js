import { LightningElement } from "lwc";

export default class ReuseableCardChild extends LightningElement {
  handleFooter() {
    const footerElement = this.template.querySelector("footer");
    if (footerElement) {
      footerElement.classList.remove("slds-hide");
    }
  }
}
