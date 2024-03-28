import { LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class UdemyDeleteRecord extends LightningElement {
    
    recordId='';
    changeHandler(event) {
        this.recordId = event.target.value;
    }

    deleteHandler(){
        deleteRecord(this.recordId)
        .then((result) => {
            this.showToast('Success', 'Record deleted', 'success');
            console.log(result);
            
        }).catch(error => {
            console.error('Error deleting record', error);
        });
    }

    showToast(title, message, variant) {
        this.dispatchEvent(new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        }));
    }
    
}