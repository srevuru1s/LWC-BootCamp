import { LightningElement } from 'lwc';

export default class LifeCycleHookChild extends LightningElement {

    constructor() {
        super();
        console.log(`Im in child Constructor`);
    }

    connectedCallback() {
        console.log(`Im in child connected call back`);
        
    }


    renderedCallback() {
        console.log(`Im in the child render call back`);
        // throw new Error(`Error when loading the child component`);
    }

    disconnectedCallback() {
        console.log(`Im in the child disconnected call back`)
    }
}