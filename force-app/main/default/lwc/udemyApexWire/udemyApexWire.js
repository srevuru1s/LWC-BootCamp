import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import filterAccountType from '@salesforce/apex/AccountController.filterAccountType';
import selectAccountType from '@salesforce/apex/AccountController.selectAccountType';

export default class UdemyApexWire extends LightningElement {
    accounts=[];
    errors='';
    selectedType='';
    typeSelected ='';
    wireData='';


    @wire(getAccountList)
    accountMethod({data, error}) {
        if (data) {
            console.log('Result: ', data);
            // this.accounts = data;  
            this.accounts = this.dataTransform(data); 
            this.errors = null;
        } else if(error) {
            console.error('Error:',error);
            this.accounts = null;
            this.errors = error;
        }
        
    }

    dataTransform(data) {
        return data.map(account =>{
            console.log('Check the property ', account.hasOwnProperty('Rating'));
        let rating = account.hasOwnProperty('Rating') ? 'Warm' : 'Cold';
            account = {...account, Rating : rating}    
                return account;    
        })
    }
    
    
        @wire(filterAccountType, {searchKey: '$selectedType'})
        wiredFilterAccountType({data, error}) {
            if (data) {
                console.log('Search :', data)
                this.selectedType = data;
                
            } else if(error) {
                console.error(error);
            }
        }

        
        @wire(selectAccountType, {newType: '$typeSelected'})
        wiredSelectAccountType({data, error}){
            if (data) {
                console.log('Data Type :', data);
                this.wireData = data;
            }else if(error) {
                console.error(error);
            }
        }     

        get optionSelected() {
            return [
                {label: 'Customer - Direct', value: 'Customer - Direct'},
                {label: 'Customer - Channel', value: 'Customer - Channel'}
            ]
        }

        handleTypeChange(event) {
            this.typeSelected = event.target.value;
        }
}