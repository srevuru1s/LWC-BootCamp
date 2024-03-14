import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class UdemyGetPickListByRecordType extends LightningElement {
    
    objectDetails='';
    selectedValue ='';
    selectedRating ='';
    ratingOptions ='';
    options ='';

    @wire(getObjectInfo, {objectApiName : ACCOUNT_OBJECT})
    objectInfo;
    
    @wire(getPicklistValuesByRecordType, {objectApiName : ACCOUNT_OBJECT, recordTypeId: '$objectInfo.data.defaultRecordTypeId'})
    wiredPicklistValues({data, error}) {
        if (data) {
            
            this.objectDetails = data.picklistFieldValues;
            this.options = [...this.optionsToSelect(data.picklistFieldValues.Industry)];
            this.ratingOptions = [...this.optionsToSelect(data.picklistFieldValues.Rating)];
        }
        if (error) {
            console.error(error);
        }
    }

    optionsToSelect(data) {
        return data.values.map(item=> ({label : item.label, value: item.value}));
    }

    handleChange(event) {

           const {name, value} = event.target;
           if (name === 'Rating') {
            this.selectedRating = value;
           } else if (name === 'Industry') {
            this.selectedValue = value;
           } 
    }
}
    
  
