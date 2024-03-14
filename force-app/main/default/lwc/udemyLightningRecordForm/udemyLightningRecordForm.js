import { LightningElement } from "lwc";

import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import ANNULA_REVENUE_FIELD from "@salesforce/schema/Account.AnnualRevenue";
import TYPE_FIELD from "@salesforce/schema/Account.Type";
import PHONE_FIELD from "@salesforce/schema/Account.Phone";
import INDUSTRY_FIELDS from "@salesforce/schema/Account.Industry";

import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class UdemyLightningRecordForm extends LightningElement {
  objectApiName = ACCOUNT_OBJECT;
  //* All the fields should be passed as a array
  fieldList = [
    NAME_FIELD,
    ANNULA_REVENUE_FIELD,
    TYPE_FIELD,
    PHONE_FIELD,
    INDUSTRY_FIELDS
  ];

  successHandler(event) {
    //* as the details are comming from SF we treat it as parent and child as LWC so we use "event.detail"
    console.log(JSON.stringify(event.detail));
    console.log(JSON.parse(JSON.stringify(event)));
    console.log(event.detail.id);

    //* Creating the toast message
    const tostEvent = new ShowToastEvent({
      title: "Account Created",
      message: "Record ID:" + event.detail.id,
      variant: "success"
    });

    //* Dispatching the toast event
    this.dispatchEvent(tostEvent);
  }
}
