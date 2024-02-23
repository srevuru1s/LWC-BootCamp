import { LightningElement } from 'lwc';

import ACCOUNT_OBJECT from '@salesforce/schema/Account'

export default class RecordEditCustom extends LightningElement {
    objectName = ACCOUNT_OBJECT
    inputValue = ''
    
    handleChange(event) {
        this.inputValue = event.target.value
    }

    handleSubmit(event) {
        event.preventDefault();
        const inputCmp = this.template.querySelectorAll('lightning-input')
        const value = inputCmp.value

        if(!value.includes('Australia')) {
            inputCmp.selectCustomValidity("The account name must incllude Australia")
        } else {
            inputCmp.selectCustomValidity("")
            const field = event.detials.fields
            fields.Name = value
            this.template.querySelector('lightning-record-edit-form').submit(fields)
        }
        inputCmp.reportValidity()
    }
}