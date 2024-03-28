import { LightningElement } from 'lwc';

export default class AccountSearchParentForce extends LightningElement {

    searchText='';
    searchAccountContactHandler(event){
        this.searchText = event.detail;
    }
}