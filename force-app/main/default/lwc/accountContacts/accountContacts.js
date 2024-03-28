import { LightningElement, wire } from 'lwc';
// Import message service features required for subscribing and the message channel
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,
} from 'lightning/messageService';
import viewAccountContactsChannel from "@salesforce/messageChannel/viewAccountContactsChannel__c";
import getAccountContacts from '@salesforce/apex/AccountController.getAccountContacts';
export default class AccountContacts extends LightningElement {
    subscription = null;
    accountId ='';

    contacts = [];
    title  = 'Contacts'

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscribeToMessageChannel()
    }

    get isAccountSelected() {
        return this.accountId ? true : false;
    }

    get hasContacts() {
        return this.contacts?.length > 0 ;
    }

    async getContacts() {
        const data = await getAccountContacts({accountId : this.accountId});
        this.contacts = data;
    }
    // Encapsulate logic for Lightning message service subscribe 
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                viewAccountContactsChannel,
                (data) => this.handleAccountSelection(data),
                { scope: APPLICATION_SCOPE }
            );
        }
    }
    handleAccountSelection(data) {
        this.accountId = data.accountId;
        this.title = `${data.accountName}'s contacts`
        this.getContacts();
    }

    disconnectedCallback(){
        this.unsubscribeToMessageChannel();
    }
    // Encapsulate logic for Lightning message service un-subscribe 
    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}