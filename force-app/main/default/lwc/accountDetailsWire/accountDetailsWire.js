import { LightningElement, wire } from "lwc";
import getParentAccount from "@salesforce/apex/AccountController.getParentAccount";
import { getObjectInfo, getPicklistValues } from "lightning/uiObjectInfoApi";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import ACCOUNT_SLA from "@salesforce/schema/Account.SLA__c";
import ACCOUNT_PARENT from "@salesforce/schema/Account.ParentId";
import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import ACCOUNT_SLAEXPIRATION from "@salesforce/schema/Account.SLAExpirationDate__c";
import ACCOUNT_NUMBEROFLOCATION from "@salesforce/schema/Account.NumberofLocations__c";
import ACCOUNT_DESCRIPTION from "@salesforce/schema/Account.Description";

import { createRecord } from "lightning/uiRecordApi";

export default class AccountDetailsWire extends LightningElement {
  parentoptions = [];
  selectedParentAcc = "";
  selectednoOfLocations = "1";
  selAccName = "";
  selExpDate = null;
  selSLAType = "";
  noLoaction = "";
  selDescription = "";

  @wire(getParentAccount)
  wired_getParentAccount({ data, error }) {
    if (data) {
      console.log(data);
      this.parentoptions = data.map((currentitem) => ({
        label: currentitem.Name,
        value: currentitem.Id
      }));
    } else if (error) {
      console.error(error);
    }
  }
  @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
  accountobjectinfo;

  @wire(getPicklistValues, {
    recordTypeId: "$accountobjectinfo.data.defaultRecordTypeId",
    fieldApiName: ACCOUNT_SLA
  })
  accSLApicktype;

  handleChange(event) {
    let { name, value } = event.target;
    if (name === "parentacc") {
      this.selectedParentAcc = value;
    }
    if (name === "accname") {
      this.selAccName = value;
    }
    if (name === "slaexpdt") {
      this.selExpDate = value;
    }
    if (name === "accType") {
      this.selSLAType = value;
    }
    if (name === "numberoflocations") {
      this.noLoaction = value;
    }
    if (name === "description") {
      this.selDescription = value;
    }
  }

  saveRecord() {
    if (this.validateInput()) {
      console.log("We got validated successfully");
      let inputfields = {};
      inputfields[ACCOUNT_NAME.fieldApiName] = this.selAccName;
      inputfields[ACCOUNT_PARENT.fieldApiName] = this.selectedParentAcc;
      inputfields[ACCOUNT_SLA.fieldApiName] = this.selSLAType;
      inputfields[ACCOUNT_SLAEXPIRATION.fieldApiName] = this.selExpDate;
      inputfields[ACCOUNT_DESCRIPTION.fieldApiName] = this.selAccName;
      inputfields[ACCOUNT_NUMBEROFLOCATION.fieldApiName] =
        this.selectednoOfLocations;

      let recordInput = {
        apiName: ACCOUNT_OBJECT.objectApiName,
        fields: inputfields
      };
      createRecord(recordInput)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log("Error in creation ", error);
        });
    } else {
      console.log("Inputs are not valid");
    }
  }

  validateInput() {
    let fields = Array.from(this.template.querySelectorAll(".validateme"));
    let isValid = fields.every((currtitem) => currtitem.checkValidity());
    return isValid;
  }
}
