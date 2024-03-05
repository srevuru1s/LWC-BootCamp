import { getPicklistValues, getObjectInfo } from "lightning/uiObjectInfoApi";
import { LightningElement, wire } from "lwc";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import ACCOUNT_TYPE from "@salesforce/schema/Account.Type";

export default class WireGetPickListValue extends LightningElement {
  @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
  objectInfo;

  pickListValues;
  selectedValue;
  @wire(getPicklistValues, {
    recordTypeId: "$objectInfo.data.defaultRecordTypeId",
    fieldApiName: ACCOUNT_TYPE
  })
  outputFunction({ data, error }) {
    if (data) {
      console.log(data.values);
      this.pickListValues = data.values;
      console.log("Picklist Values :", this.pickListValues);
    } else if (error) {
      console.log(error);
    }
  }

  handleChange(event) {
    this.selectedValue = event.target.value;
  }
}
