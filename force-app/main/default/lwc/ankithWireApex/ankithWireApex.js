import { LightningElement, wire } from "lwc";
import getAccountList from "@salesforce/apex/AccountController.getAccountList";

const columns = [
  { label: "Id", fieldName: "Id" },
  { label: "Name", fieldName: "Name" },
  { label: "Phone", fieldName: "phone", type: "phone" },
  { label: "Type", fieldName: "Type" },
  { label: "Rating", fieldName: "Rating" }
];

export default class AnkithWireApex extends LightningElement {
  columns = columns;
  updatedContacts = {};
  myAccounts;
  errors;
  // @wire(getAccountList) accounts;
  @wire(getAccountList)
  accountFunction({ data, error }) {
    if (data) {
      this.updatedContacts = data.map((currItem) => {
        let updateObject = {};

        if (!currItem.hasOwnProperty("Rating")) {
          updateObject = { ...currItem, Rating: "Warm" };
        } else {
          updateObject = { ...currItem };
        }
        return updateObject;
      });
      console.log("Updated contacts :", this.updatedContacts);
      this.myAccounts = [...this.updatedContacts];
      this.errors = null;
    } else if (error) {
      console.log(error);
      this.errors = error;
      this.myAccounts = null;
    }
  }
}
