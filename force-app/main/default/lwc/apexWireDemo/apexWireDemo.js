import { LightningElement, wire } from "lwc";
import getAccountList from "@salesforce/apex/AccountController.getAccountList";

export default class ApexWireDemo extends LightningElement {
  @wire(getAccountList)
  accounts;
  accountList;

  @wire(getAccountList)
  accountsHandler({ data, error }) {
    if (data) {
      this.accountList = data.map((item) => {
        let newType =
          item.Type === "Customer - Channel"
            ? "Channel"
            : item.Type === "Customer - Direct"
              ? "Direct"
              : "----";
        return { ...item, newType };
      });
      this.error = undefined;
    } else if (error) {
      this.error = error;
      this.accountList = undefined;
    }
  }
}
