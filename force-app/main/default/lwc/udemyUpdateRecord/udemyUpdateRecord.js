import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import { updateRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';

const COLUMNS = [
    {label : 'Name', fieldName : 'Name'},
    {label : 'Title', fieldName : 'Title'},
    {label : 'Phone', fieldName : 'Phone'},
    {label : 'Email', fieldName : 'Email', type : 'email', editable: true},
    {label : 'Id', fieldName : 'Id'}
];

export default class UdemyUpdateRecord extends LightningElement {
    contactObject = CONTACT_OBJECT;
    contacts=[];
    columns = COLUMNS;
    draftValues = [];

    @wire((getListUi), {objectApiName:'$contactObject' , listViewApiName: 'AllContacts'})
    listViewHandler({data, error}) { 
        
        if(data) {
          console.log(data);

          this.contacts = data.records.records.map(item=> {
            return {
                "Name"  : this.getValue(item, 'Name'),
                "Title" : this.getValue(item, 'Title'),
                "Phone" : this.getValue(item, 'Phone'),
                "Email" : this.getValue(item, 'Email'),
                "Id"    : this.getValue(item, 'Id')
            }
          })
        } else if(error) {
            console.error(error);
        }
    }

    getValue(data, field) {
        return data.fields[field].value
    }

    handleSave(event){

        console.log(JSON.stringify(event.target));
        console.log(JSON.stringify(event.target.draftValues));

        const recordInputs = event.target.draftValues.map((draft) => {
            const fields = {...draft};
            return {fields: fields}
        })
        
        const promises = recordInputs.map(recordInput=> updateRecord (recordInput))

        Promise.all(promises).then(()=>{
            
            console.log('Update Successful')
            this.draftValues=[];
        }).catch(error => {
            console.error(error);
        })
    }    
 }
