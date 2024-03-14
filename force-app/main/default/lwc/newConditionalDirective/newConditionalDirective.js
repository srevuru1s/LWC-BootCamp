import { LightningElement } from "lwc";

export default class NewConditionalDirective extends LightningElement {
  submitHandler() {
    console.log("this.refs.nameRef", this.refs.nameRef);
    const nameVal = this.refs.nameRef.value;
    const ageVal = this.refs.ageRef.value;
    //     If the template contains duplicate lwc:ref directives,
    // this.refs references the last directive.
    console.log("nameVal", nameVal);
    console.log("ageVal", ageVal);
  }

  //this.template.querySelector('.hello') vs refs
}
