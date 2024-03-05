import { LightningElement } from "lwc";

export default class LifeCycleChildHook extends LightningElement {
  constructor() {
    super();
    console.log(`child constrcutor called`);
  }
  connectedCallback() {
    console.log(`child connetedcallback called`);
    throw new Error(`Loading of child component Failed`);
  }
  renderedCallback() {
    console.log(`child renderedcallback called`);
  }
  disconnectedCallback() {
    alert(`Child disconnected call back called !!`);
  }
}
