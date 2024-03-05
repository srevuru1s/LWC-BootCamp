import { LightningElement, api } from "lwc";

export default class LwcComponentChildThree extends LightningElement {
  @api welcomeDisplay;
  @api greetingDisplay;
  @api motivationDisplay;
  @api lwcreadyDisplay;
  @api skills;
}
