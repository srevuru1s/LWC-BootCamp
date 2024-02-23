import { LightningElement, api } from 'lwc';

export default class SetterDemoChild extends LightningElement {
    myDetails;
    @api
    get details() {
        return this.myDetails;
    }

    set details(data) {
        let newLocation = 'charlotte';
        this.myDetails = {...data,location:newLocation, "skills": "LWC"};
    }
}