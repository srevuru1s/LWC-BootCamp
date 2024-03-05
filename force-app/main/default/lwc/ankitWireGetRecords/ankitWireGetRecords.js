import { LightningElement, api, wire } from "lwc";

import { getRecords } from "lightning/uiRecordApi";
import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import ACCOUNT_TYPE from "@salesforce/schema/Account.Type";
import CONTACT_NAME from "@salesforce/schema/Contact.Name";
import CONTACT_LASTNAME from "@salesforce/schema/Contact.LastName";

export default class AnkitWireGetRecords extends LightningElement {
  allRecords;
  @wire(getRecords, {
    records: [
      {
        recordIds: ["001an000000cMkLAAU"],
        fields: [ACCOUNT_NAME, ACCOUNT_TYPE]
        // optionalFields : []
      },
      {
        recordIds: ["003an000000q3mbAAA"],
        fields: [CONTACT_NAME, CONTACT_LASTNAME]
      }
    ]
  })
  outputFunction({ data, error }) {
    if (data) {
      console.log(data);
      this.allRecords = data;
    } else if (error) {
      console.error(error);
    }
  }
}
