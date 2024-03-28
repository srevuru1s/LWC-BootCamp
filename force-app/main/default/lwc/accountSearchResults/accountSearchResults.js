import { LightningElement, api, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
// Import message service features required for publishing and the message channel
import { publish, MessageContext } from "lightning/messageService";
import viewAccountContactsChannel from "@salesforce/messageChannel/viewAccountContactsChannel__c";

const COLUMNS = [
    { label: 'Id', fieldName: 'Id' },
    { label: 'Name', fieldName: 'Name' },
    { label: 'Actions', type: 'button', typeAttributes: {
        label: 'View Contacts',
        name: 'View Contacts',
        title: 'View Contacts',
        value: 'view_contacts',
    } },

];

export default class AccountSearchResults extends LightningElement {
    @api searchText;
    columns = COLUMNS;

    accounts;
    
    @wire(getAccounts, {searchText: '$searchText'})
        accountsList({data, error}){
            if (data) {
                console.log(data)

                this.accounts = data;
            } else if(error) {
                console.error(error)
            }
        }
        @wire(MessageContext)
        messageContext;
    
        // Respond to UI event by publishing message

        rowActionHandler(event){
            if (event.target.action.value == 'view_contacts') {
                
                const payload = {recordId : event.target.row.Id, accountName : event.target.row.Name};
                publish(this.messageContext, viewAccountContactsChannel, payload);
            }
        }
}