import { LightningElement } from "lwc";

export default class HelloQuerySelector extends LightningElement {
  userNames = ["Mike", "Joy", "Roy"];
  fetchDetailHandler() {
    let element = this.template.querySelector(".slds-text-title");
    element.style.border = "1px solid red";
    console.log(element.innerText);

    let userElement = this.template.querySelectorAll(".name");
    Array.from(userElement).forEach((item, Index, array) => {
      console.log("Current user:", item.innerText);
      console.log("Index:", Index);
      console.log("All Array:", array);
      item.setAttribute("title", item.innerText);
    });
    //*lwc:dom
    let childElem = this.template.querySelector(".child");
    childElem.innerHTML = "<p> Hey im a child element </p>";
  }
}
