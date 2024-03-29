import { LightningElement, wire } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import getSingleContact from "@salesforce/apex/ContactController.getSingleContact";

export default class NavToRecord extends NavigationMixin(LightningElement) {
  @wire(getSingleContact) contact;

  navigateToContact() {
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: this.contact.data.Id,
        objectApiName: "Contact",
        actionName: "view"
      }
    });
  }

  navigateToEdit() {
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: this.contact.data.Id,
        objectApiName: "Contact",
        actionName: "edit"
      }
    });
  }
}
