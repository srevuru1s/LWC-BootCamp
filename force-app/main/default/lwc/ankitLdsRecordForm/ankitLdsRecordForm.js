import { LightningElement, api, wire } from "lwc";

import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import ACCOUNT_REVENUE from "@salesforce/schema/Account.AnnualRevenue";
import { getRecord } from "lightning/uiRecordApi";

const accFields = [ACCOUNT_NAME, ACCOUNT_REVENUE];

export default class AnkitLdsRecordForm extends LightningElement {
  @api recordId;
  @api objectApiName;

  @wire(getRecord, {
    recordID: "$recordId",
    fields: [ACCOUNT_NAME, ACCOUNT_REVENUE]
  })
  outputFunction({ data, error }) {
    if (data) {
      console.log(data);
    } else if (error) {
      console.error(error);
    }
  }
}
