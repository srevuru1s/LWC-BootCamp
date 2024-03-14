import { LightningElement } from "lwc";
import USER_IMAGE from "@salesforce/resourceUrl/SalesforceTroop_image";
import MOMENT from "@salesforce/resourceUrl/moment";
import { loadScript } from "lightning/platformResourceLoader";
// Example :- import TRAILHEAD_LOGO from '@salesforce/resourceUrl/trailhead_logo';";
export default class StaticImage extends LightningElement {
  userImage = USER_IMAGE;
  currentDate;
  renderMe = false;

  // Example :- trailheadLogo = TRAILHEAD_LOGO;
  renderedCallback() {
    if (!this.renderMe) {
      this.renderMe = true;
      Promise.all([loadScript(this, MOMENT + "/moment/moment.min.js")])
        .then(() => {
          console.log("Moment loaded");
          this.setDateOnScreen();
        })
        .catch((error) => {
          console.error("Moment load failed", error);
        });
    }
  }
}
