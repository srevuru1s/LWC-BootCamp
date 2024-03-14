import { LightningElement } from "lwc";
import CONTACT_OBJECT from "@salesforce/schema/Contact";
import NAME_FIELD from "@salesforce/schema/Contact.Name";
import TITLE_FIELD from "@salesforce/schema/Contact.Title";
import PHONE_FIELD from "@salesforce/schema/Contact.Phone";
import EMAIL_FIELD from "@salesforce/schema/Contact.Email";
import ACCOUNT_FIELD from "@salesforce/schema/Contact.AccountId";

// import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class UdemyRecordEditForm extends LightningElement {
  objectName = CONTACT_OBJECT;

  fields = {
    accountField: ACCOUNT_FIELD,
    nameField: NAME_FIELD,
    titleField: TITLE_FIELD,
    phoneField: PHONE_FIELD,
    emailField: EMAIL_FIELD
  };

  handleReset() {
    const inputFields = this.template.querySelectorAll("lightning-input-field");

    console.log(
      "🚀 ~ file: udemyRecordEditForm.js:25 ~ UdemyRecordEditForm ~ handleReset ~ inputFields:",
      inputFields
    );

    if (inputFields) {
      Array.from(inputFields).forEach((inputField) => {
        inputField.reset();
      });
    }
  }

  //   objectName = CONTACT_OBJECT;
  //   fields = {
  //     nameField: NAME_FIELD,
  //     emailField: EMAIL_FIELD,
  //     phoneField: PHONE_FIELD,
  //     titleField: TITLE_FIELD,
  //     accountIdField: ACCOUNT_FIELD
  //   };
  //   //   submitHandler() {
  //   //     this.showToast(
  //   //       "Toast Title Success",
  //   //       "Account Submitted Success",
  //   //       "success",
  //   //       "sticky"
  //   //     );
  //   //   }
  //   //   cancelHandler(event) {
  //   //     console.log(JSON.parse(JSON.stringify(event)));
  //   //     this.showToast(
  //   //       "Toast Title Error",
  //   //       " Error in Account Edit",
  //   //       "error",
  //   //       "sticky"
  //   //     );
  //   //   }

  //   showToast(title, message, variant, mode) {
  //     const event = new ShowToastEvent({
  //       title,
  //       message,
  //       variant,
  //       mode
  //     });
  //     this.dispatchEvent(event);
  //   }
}
