import { LightningElement, api, wire } from "lwc";

import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import ACCOUNT_REVENUE from "@salesforce/schema/Account.AnnualRevenue";

import {
  getRecord,
  getFieldValue,
  getFieldDisplayValue
} from "lightning/uiRecordApi";

export default class AnkitGetRecordWireDemo extends LightningElement {
  @api recordId;
  accName;
  accReve;

  @wire(getRecord, {
    recordId: "$recordId",
    fields: [ACCOUNT_NAME, ACCOUNT_REVENUE]
  })
  outputFunction({ data, error }) {
    if (data) {
      console.log(data);
      // this.accName = data.fields.Name.value;
      // this.accReve = data.fields.AnnualRevenue.value;
      // this.accName = getFieldValue(data, ACCOUNT_NAME);
      // this.accReve  = getFieldValue(data, ACCOUNT_REVENUE);
      this.accName = getFieldValue(data, ACCOUNT_NAME);
      this.accReve = getFieldDisplayValue(data, ACCOUNT_REVENUE);
    } else if (error) {
      console.log(error);
    }
  }
}
