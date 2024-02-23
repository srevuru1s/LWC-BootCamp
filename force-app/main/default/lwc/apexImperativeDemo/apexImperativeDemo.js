import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
export default class ApexImperativeDemo extends LightningElement {
    
    accounts;
    handleClick() {
        getAccountList().then((result)=>{
            this.accounts = result;
            console.log(this.accounts);
        }).catch(error =>{
            console.error(error);
        }) 
    }
}