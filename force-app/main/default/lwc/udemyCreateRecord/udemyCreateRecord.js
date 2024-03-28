
import { LightningElement } from 'lwc';
import { createRecord }     from 'lightning/uiRecordApi';
import CONTACT_OBJECT       from '@salesforce/schema/contact';
import {ShowToastEvent}     from 'lightning/platformShowToastEvent';

export default class UdemyCreateRecord extends LightningElement {
  
    formFields = {};

    changeHandler(event) {

        const {name, value } = event.target;
        this.formFields[name] = value;
    }

    createContact() {
        const recordInput = {apiName: CONTACT_OBJECT.objectApiName, fields: this.formFields}
        createRecord(recordInput).then(result => {

            this.showToast('Success', `Contact created with is ${result.id}`, 'success')

            // this.refs.formRef.reset(); //* using ref to get the element and reset the form
            
            this.template.querySelector('.createform').reset(); //* using the class

            this.formFields={};

        }).catch(error => {
            console.log(error);
            this.showToast('Error Creating record', error.body.message, 'error')
        });
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({
             title,
             message,
             variant: variant || 'success'
        }))
    }
}