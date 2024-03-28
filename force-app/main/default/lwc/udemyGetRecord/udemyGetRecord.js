import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';


export default class UdemyGetRecord extends LightningElement {
    contactName  = '';
    contactEmail = '';
    contactOwner = '';
    contactPhone = '';

    @api recordId;
    @wire(getRecord, {recordId : '$recordId', layoutTypes : ['Full'], modes : ['Edit']})
    contactHandler({data, error}) {
        if (data) {
            console.log(data);
             this.contactName = data.fields.CreatedBy.displayValue;
             this.contactEmail = data.fields.Email.value;
             this.contactPhone = data.fields.Phone.value;
             this.contactOwner = data.fields.Owner.value.apiName;
        }
        if (error) {
            console.error(error);  
        } 
    }
}