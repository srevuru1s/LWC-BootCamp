import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class UdemyEditCustom extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    inputValue = '';
    elementdetials =' ';

    handleChane(event){

        console.log("Value in input field: " + event.target.value);
        this.inputValue = event.target.value;
    }

    handleSubmit(event){


        //* when ever we click any button JS will refresh the page to stop we use prent default
        event.preventDefault(); 

        //* fetching the input field value
        const inputElement = this.template.querySelector('lightning-input');
        const inputField = inputElement.value;

        console.log("🚀 ~ file: udemyEditCustom.js:18 ~ UdemyEditCustom ~ handleSubmit ~ inputField:", inputField);

        if (!inputField.includes('USA')) {
            inputElement.setCustomValidity('The Account name must include USA');
        } else {

            inputElement.setCustomValidity('');
            
             const fields = event.detail.fields; //* Querying the all the fields in the Account Object
             fields.Name = inputField; //* Updating the Account Object with the new Name
             
              this.template.querySelector('lightning-record-edit-form').submit(fields); //* Submitting the Account Object with the new Name
        }

        inputElement.reportValidity(); //* To show the error message in the input field
       
        
    }
    
    //* As these handlers are on record edit form so they can able to fetch the record id and fields of the object 
    //* To get the record id we can use the event.detail.id
    successHandler(event) {
        const toastEvent = ShowToastEvent({
            title: 'Account Created',
            message: 'Record ID:'+event.detail.id,
            variant: 'success',
        });

        this.dispatchEvent(toastEvent);
    }
    
    //* When the error occurs in the network 
    errorHandler(event) {
        const toastEvent = ShowToastEvent({
            title  : 'Error Account Creation`',
            message: event.detail.message,
            variant: 'error'
        });

        this.dispatchEvent(toastEvent);
    }
}