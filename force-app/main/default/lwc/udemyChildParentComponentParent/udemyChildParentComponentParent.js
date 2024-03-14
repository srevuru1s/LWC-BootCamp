import { LightningElement } from "lwc";

export default class UdemyChildParentComponentParent extends LightningElement {
  showmodel = false;
  mesg;
  clickHandler() {
    this.showmodel = true;
  }
  closeHandler(event) {
    this.showmodel = false;
    this.mesg = event.detail.message;
  }
}
