import { getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";
import { LightningElement, wire } from "lwc";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import ACCOUNT_INDUSTRY from "@salesforce/schema/Account.Industry";

export default class AnkitWireGetPickListValues extends LightningElement {
  selectedIndustry;
  accpickList;

  @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
  accountProperty;

  @wire(getPicklistValues, {
    recordTypeId: "$accountProperty.data.defaultRecordTypeId",
    fieldApiName: ACCOUNT_INDUSTRY
  })
  industryPickList;
  //   outPutFunction ({data, error}) {
  //       if (data) {
  //          this.accpickList = data.values.map(item => ({label : item.label, value : item.value}))

  //     } else if (error) {
  //          console.log(error);
  //     }
  // }

  handleChange(event) {
    this.selectedIndustry = event.target.value;
  }
}
