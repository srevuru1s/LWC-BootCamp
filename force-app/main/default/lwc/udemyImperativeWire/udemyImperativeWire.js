import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import filterAccountType from '@salesforce/apex/AccountController.filterAccountType';

export default class UdemyImperativeWire extends LightningElement {         
    accounts = [];
    inputValue ='';
    searchedAccounts = [];
    timer = '';

    onclickHandler() {
        getAccountList().then((result) => {
            console.log('Results :', result);
            this.accounts = result;
        }).catch((error) => {
            console.error(error);
        })
    }

    searchHandler() {
        this.inputValue = this.refs.searchRef.value
        console.log('Keyed input :', this.inputValue);
        this.debouncing();
    }

    debouncing() {
        console.log('Wire input :', this.inputValue);
        filterAccountType({searchKey : this.inputValue}).then((result) => {
            console.log('Results :', result);
            this.searchedAccounts = this.updateFields(result);
        }).catch((error) => {
            console.error(error);
        })
    }
    updateFields(result) {
        return result.map(account => {
            let typeValue = account.prototype.hasOwnProperty('Type') ? 'Prospect' : 'Other';
            let newPhone  = account.prototype.hasOwnProperty('Phone') ? '5732000694' : '5732001114';
            account = {...account, Type: typeValue, Phone: newPhone}
            
            return account
        })
    }
}