import { LightningElement } from 'lwc';

export default class LifeCycleHookParent extends LightningElement {
    isVisible = 'true';
    constructor() {
        super();
        console.log(`Im into the parent constructor`);
    }

    connectedCallback() {
        console.log(`Im into the parent connected call back`);
    }


    renderedCallback() {
        console.log(`Im into the parent render call back`);
    }

    errorCallback(error, stack) {
        console.log(`Im parent error call back`);
        console.log(`error ${error}`);
        console.log(`Stack ${stack}`);
    }

    handleClick() {
        
        this.isVisible = !this.isVisible;
    }
}