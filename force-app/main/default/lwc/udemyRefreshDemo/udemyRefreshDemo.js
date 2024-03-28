import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import { updateRecord } from 'lightning/uiRecordApi';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';

const columns = [
    { label: 'Account Name', fieldName: 'Name', type: 'text', editable:true },
    { label: 'Account Industry', fieldName: 'Industry', type: 'text', editable:true },
    { label: 'Account Rating', fieldName: 'Rating', type: 'text', editable:true },
    { label: 'Account Phone', fieldName: 'Phone', type: 'phone' }
    ];

export default class UdemyRefreshDemo extends LightningElement {
    
    columns = columns ;
    draftValues = [];    
    @wire(getAccountList)
    account;

    handleSave(event){

        console.log('draft values :', JSON.stringify( event.target.draftValues));
        
        const recordInputs = event.target.draftValues.slice().map(draft => {
              const fields = Object.assign({}, draft)
              return {fields : fields }
        })

        console.log('Updated Records:', recordInputs);

        const promises = recordInputs.map(recordInput => updateRecord(recordInput));
        Promise.all(promises).then(() => {
           this.showToast('Success', 'Updated Successfully')    
           this.draftValues = []; 
           return refreshApex(this.account);
        }).catch(error => {
            
            this.showToast('Error', 'Error updating the records', error.body.message, error) 
        })
    }
    
    showToast(title, message, variant) {
        this.dispatchEvent(
            new ShowToastEvent({
                 title: 'Success',
                 message: 'Records Updated',
                 variant: variant || 'success'
            })
        )
    }
}