import { LightningElement, wire } from 'lwc';

import {getObjectInfo, getObjectInfos} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';

const allObjects = [ACCOUNT_OBJECT, CONTACT_OBJECT, OPPORTUNITY_OBJECT];
export default class UdemyWireGetObjectInfo extends LightningElement {
    
    
    objectName = ACCOUNT_OBJECT;
    defaultRecordType ='';
    allObjectInfos = '';
    
        @wire(getObjectInfo, { objectApiName : '$objectName'})
        objectInfo({data, error}) {
            if(data) {
                this.defaultRecordType = data.defaultRecordTypeId;
                console.log(data);
            }
            if(error) {
                console.error(error);
            }
        }

        @wire(getObjectInfos, { objectApiNames : allObjects})
        objectInfos({data, error}) {
             if(data) {
                 
                 this.allObjectInfos = data.results;
                 console.log(this.allObjectInfos);

                 //console.log(Object.keys(data));

             }
             if(error) {
                 console.error(error);
             }
         }
}