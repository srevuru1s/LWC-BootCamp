import { LightningElement, api, wire } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';

export default class UdemyGetRecordUi extends LightningElement {
    formFields = [
        {fieldName : "OwnerId",     label : 'Owner Id'},
        {fieldName : "Phone",       label : 'Phone Number'},
        {fieldName : "LastName",    label : 'Last Name'},
        {fieldName : "Email",       label : 'Email Id'}
    ];

    @api recordId;
    @wire(getRecordUi, {recordIds: '$recordId', layoutTypes: 'Full', modes: 'Edit'})
    accountRecordUiHandler({data, error}) {
        if (data) {
            console.log(data);
            this.formFields = this.formFields.map(item => {

                return {...item, value:data.records[this.recordId].fields[item.fieldName].value}
            })
            console.log(this.formFields)
        }
        if (error) {
            console.error(error);
        }
    }
}