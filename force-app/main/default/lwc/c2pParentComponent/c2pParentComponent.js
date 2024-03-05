import { LightningElement } from "lwc";

export default class C2pParentComponent extends LightningElement {
  showModel = false;

  clickHandler(event) {
    this.showModel = !this.showModel;
  }
  message;
  closeHandler(event) {
    this.message = event.detail.mess;
    this.showModel = !this.showModel;
  }
}
