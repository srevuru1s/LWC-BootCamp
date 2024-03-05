import { LightningElement, wire } from "lwc";

import { getObjectInfo } from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

export default class WireGetObjectInfoDemo extends LightningElement {
  @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
  objectInfoProperty; //* data reterieve from property

  defaultRecordTypeId = "";
  apiName = "";

  @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
  //* data reterieve from function
  objectInfo({ data, error }) {
    if (data) {
      this.defaultRecordTypeId = data.defaultRecordTypeId;
      this.apiName = data.apiName;
    }
    if (error) {
      console.log("Object Data:", error);
    }
  }
}
