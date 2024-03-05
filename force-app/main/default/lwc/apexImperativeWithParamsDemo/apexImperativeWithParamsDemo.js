import { LightningElement } from "lwc";
import filterAccountType from "@salesforce/apex/AccountController.filterAccountType";

export default class ApexImperativeWithParamsDemo extends LightningElement {
  searchkey = "";
  accounts;
  timer;

  searchHandler(event) {
    //* clearning the timer everytime when the input keys
    window.clearTimeout(this.timer);
    this.searchkey = event.target.value;

    this.timer = setTimeout(() => {
      this.callApex();
    }, 2000);
    console.log("Timer console:", this.timer);
  }

  callApex() {
    filterAccountType({ searchKey: this.searchkey })
      .then((result) => {
        this.accounts = result;
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
