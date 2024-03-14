import { LightningElement, api } from "lwc";

export default class UdemyGetterChild extends LightningElement {
  userInfo;

  @api get detial() {
    return this.userInfo;
  }
  set detial(data) {
    let newAge = data.age * 2;
    this.userInfo = { ...data, age: newAge, location: "Charlotte" };
  }

  handleFooter() {
    const footerElement = this.template.querySelector(".slds-card__footer");
    if (footerElement) {
      footerElement.classList.remove("slds-hide");
    }
  }
}
