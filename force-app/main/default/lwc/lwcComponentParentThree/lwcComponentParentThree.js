import { LightningElement } from 'lwc';

export default class LwcComponentParentThree extends LightningElement {

    welcome    = "Good Morning Sagar";
    greeting   = "Welcome to LWC Camp";
    motivation = "Prepare Hard So Your Success Echo";
    lwcready   = false;
    lwcskills  = {
                  decorators  : "api, track, wire",
                  conditional : "Learned",
                  events      : "Handled"  
    };

}