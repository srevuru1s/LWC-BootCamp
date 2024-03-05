import { LightningElement } from "lwc";

import Contact_OBJECT from "@salesforce/schema/Contact";
import NAME_FIELD from "@salesforce/schema/Contact.Name";
import PHONE_FIELD from "@salesforce/schema/Contact.Phone";
import EMAIL_FIELD from "@salesforce/schema/Contact.Email";
import ACCOUNTID_FIELD from "@salesforce/schema/Contact.AccountId";
import TITLE_FIELD from "@salesforce/schema/Contact.Title";

export default class LwcRecordEditForm extends LightningElement {
  objectName = Contact_OBJECT;
  fields = {
    accountField: ACCOUNTID_FIELD,
    nameField: NAME_FIELD,
    phoneField: PHONE_FIELD,
    emailField: EMAIL_FIELD,
    titleField: TITLE_FIELD
  };

  handelReset() {
    const inputFields = this.template.querySelectorAll("lightning-input-field");
    if (inputFields) {
      Array.from(inputFields).forEach((field) => {
        field.reset();
      });
    }
  }
}
