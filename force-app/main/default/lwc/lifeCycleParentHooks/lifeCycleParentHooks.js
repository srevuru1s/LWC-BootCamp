import { LightningElement } from "lwc";

export default class LifeCycleParentHooks extends LightningElement {
  constructor() {
    super();
    console.log(`parent constrcutor called`);
  }
  connectedCallback() {
    console.log(`parent connetedcallback called`);
  }
  renderedCallback() {
    console.log(`parent renderedcallback called`);
  }
  name;
  changeHander(event) {
    this.name = event.target.value;
  }

  showChild = true;
  handleClick() {
    this.showChild = !this.showChild;
  }

  errorCallback(error, stack) {
    console.log(error.message);
    console.log(stack);
  }
}
