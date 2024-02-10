import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {
    
    @api display; //* small case
    @api displayGreeting; //* camel case
    @api user;
    @api isUserAvailable = false; //* Boolean variable
    displaylifeTag;

    set displaytagoflife(value) {
        let cloneOfvalue = value;
        this.displaylifeTag = cloneOfvalue.toUpperCase();
    }

    @api 
    get displaytagoflife () {
        return this.displaylifeTag;
    }
};