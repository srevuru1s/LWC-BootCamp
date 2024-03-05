import { LightningElement, wire } from "lwc";

import { getObjectInfo, getObjectInfos } from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import CONTACT_OBJECT from "@salesforce/schema/Contact";

export default class AnkitWireGetObjectInfo extends LightningElement {
  // accountInfo;
  // accounterror;

  // @wire(getObjectInfo, {objectApiName : ACCOUNT_OBJECT})
  // outputFunction ({data, error}) {
  //     if (data) {
  //         console.log(data);
  //         this.accountInfo  = data;
  //         this.accounterror = null;
  //     } else if (error) {
  //         console.log(error);
  //         this.accountInfo  = null;
  //         this.accounterror = error;
  //     }
  // }
  objectList = [ACCOUNT_OBJECT, CONTACT_OBJECT];
  objectInfo;
  objectError;

  @wire(getObjectInfos, { objectApiNames: "$objectList" })
  outputFunction({ data, error }) {
    if (data) {
      console.log(data);
      this.objectInfo = data;
      this.objectError = null;
    } else if (error) {
      console.log(error);
      this.objectError = error;
      this.objectInfo = null;
    }
  }
}
