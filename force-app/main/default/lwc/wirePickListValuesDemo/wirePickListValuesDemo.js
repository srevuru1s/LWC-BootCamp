import { LightningElement, wire }                               from 'lwc';
import {  getPicklistValuesByRecordType, getObjectInfo  }       from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT                                           from '@salesforce/schema/Account';

export default class WirePickListValuesDemo extends LightningElement {

    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectInfo

    ratingOptions
    industryOptions
    selectedIndustry
    selectedRating

    @wire(getPicklistValuesByRecordType, {objectApiName:ACCOUNT_OBJECT, recordTypeId:'$objectInfo.data.defaultRecordTypeId'})
        pickListHandler({data, error}) {
            if(data) {
                console.log(data)
                this.ratingOptions = this.picklistGenerator(data.picklistFieldValues.Rating)
                this.industryOptions = this.picklistGenerator(data.picklistFieldValues.Industry)
                
            } if(error) {
                console.error(error)
            }
        }
    
        picklistGenerator(data) {
            return data.values.map(item=>({label:item.label, value:item.value}))
        }

        handleChange(event) {
            let {name, value } = event.target
            console.log(name +'==>' + value)
            if (name === 'industry') {
                this.selectedIndustry = value
            } 
            if (name === 'rating') {
                this.selectedRating = value
            }
        }
}