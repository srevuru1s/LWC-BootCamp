import { LightningElement, wire } from 'lwc';
import Id from '@salesforce/user/Id';
import {getRecord} from 'lightning/uiRecordApi';

import NAME_FIELD from '@salesforce/schema/User.Name';
import Email_FIELD from '@salesforce/schema/User.Email';
import Phone_FIELD from '@salesforce/schema/User.Phone';

const fields = [NAME_FIELD, Email_FIELD, Phone_FIELD];
export default class UdemyWireDemo extends LightningElement {
    userId = Id;
    userDetail;
    //* 005an0000003m05AAA

    // TODO @wire(adapter, adapterConfig);
    // TODO property or function;

    @wire(getRecord, { recordId: '$userId', fields })
    userDetailHandler({data, error}) {
        console.log(data);
        if (data) {
            this.userDetail = data.fields;
            console.log(this.userDetail);
        } else if (error) {
            console.error(error);
        }
    }

    @wire(getRecord, { recordId: '$userId', fields })
    userDetailProperty;
    
}