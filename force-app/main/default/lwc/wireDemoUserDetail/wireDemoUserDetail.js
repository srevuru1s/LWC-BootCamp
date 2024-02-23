import { LightningElement, wire } from 'lwc';

import {getRecord} from 'lightning/uiRecordApi' //* importing the adapter
import ID from '@salesforce/user/Id' //* Import user id
import NAME_FIELD from '@salesforce/schema/User.Name' //* Fields import
import EMAIL_FIELD from '@salesforce/schema/User.Email'

const userFields = [NAME_FIELD, EMAIL_FIELD] //* Store them in an variable

export default class WireDemoUserDetail extends LightningElement {
    
    userid = ID;
    userDetails = '';

    @wire(getRecord, {recordId: '$userid', 
                    fields: userFields})

    userDetailHandler({data, error}) {
        if(data) {
            this.userDetails = data.fields
        } if(error) {
            console.error(error)
            
        }
    }

    @wire(getRecord, {recordId: '$userid', 
                    fields: userFields})
     userDetailProperty

}