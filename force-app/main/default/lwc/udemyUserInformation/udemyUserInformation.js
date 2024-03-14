import { LightningElement, api } from "lwc";
import ID from "@salesforce/user/Id";
import IS_GUEST from "@salesforce/user/isGuest";

export default class UdemyUserInformation extends LightningElement {
  userId = ID;
  isGuest = IS_GUEST;
  @api recordId;
  @api objectApiName;
}
