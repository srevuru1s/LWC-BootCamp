import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import TYPE_FIELD from '@salesforce/schema/Account.Type';

export default class UdemyGetPickListValues extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;
    selectedField = INDUSTRY_FIELD;
    objectDetails = '';

    //* Combo Box:
    selectedIndustry = '';
    industryOptions = [];

    //* Type Combo Box
    selectedType = '';
    typeOptions =[];

    @wire(getObjectInfo, {objectApiName : '$objectApiName'})
    objectInfo;
    

    @wire(getPicklistValues, {recordTypeId: '$objectInfo.data.defaultRecordTypeId'  , fieldApiName: '$selectedField'})
    industryPickListHandler ({data, error}) {
        if (data) {
            console.log(data);
            this.objectDetails = data.values;
            this.industryOptions = [...this.generatePickList(data)];
        }
        if (error) {
            console.error(error);
        }
    }

    generatePickList(data) {
        return data.values.map(item=> ({label : item.label, value: item.value}));
    }
    handleChange(event) {
        this.selectedIndustry = event.detail.value;
    }

    @wire(getPicklistValues, {recordTypeId: '$objectInfo.data.defaultRecordTypeId'  , fieldApiName: TYPE_FIELD})
    typePickListHandler ({data, error}) {
        if (data) {
            console.log(data);
            this.objectDetails = data.values;
            this.typeOptions = [...this.generateTypePickList(data)];
        }
        if (error) {
            console.error(error);
        }
    }

    generateTypePickList(data) {
        return data.values.map(item=> ({label : item.label, value: item.value}));
    }
    typeHandleChange(event) {
        this.selectedType = event.target.value;
    }
}