import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue, getFieldDisplayValue } from 'lightning/uiRecordApi';
import NAME_FIELD    from '@salesforce/schema/Account.Name';
import OWNER_FIELD    from '@salesforce/schema/Account.Owner.Name';
import ANNUALREVENUE_FIELD    from '@salesforce/schema/Account.AnnualRevenue';

export default class WireGetRecordDemo extends LightningElement {
    name 
    owner 
    annualRevenue 
    @api recordId
    
      @wire(getRecord, {recordId:'$recordId',
      fields:[NAME_FIELD, OWNER_FIELD, ANNUALREVENUE_FIELD]})
    // @wire(getRecord, {recordId:'$recordId', layoutTypes:['Full'], modes:['View']})
      accountHandler({data, error}) {
        if (data) {
            console.log(data)
            this.name = getFieldValue(data, NAME_FIELD)
            this.annualRevenue = getFieldDisplayValue(data, ANNUALREVENUE_FIELD)        
            this.owner = getFieldValue(data, OWNER_FIELD)
        if (error) {
            console.log(error)
        }
      }
    // @wire(getRecord, {recordId:'$recordId',
    //  layoutTypes:['Full'], modes:['View']})
    //  accountHandler({data}){
    //      if(data){
    //          console.log(data)
    //          this.name = data.fields.Name.displayValue ? data.fields.Name.displayValue:
    //          data.fields.Name.value
    //          this.AnnualRevenue = data.fields.AnnualRevenue.displayValue ? data.fields.AnnualRevenue.displayValue:
    //          data.fields.AnnualRevenue.value
    //          this.owner = data.fields.Owner.displayValue ? data.fields.Owner.displayValue:
    //          data.fields.Owner.value

    //      }
    //  }
   }
}