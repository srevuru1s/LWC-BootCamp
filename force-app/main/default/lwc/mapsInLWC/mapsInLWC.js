import { LightningElement, wire } from 'lwc';
import lwcMap from '@salesforce/apex/AccountController.lwcMap';
export default class MapsInLWC extends LightningElement {
    mapMarkers = [];
    markersTitle = 'Accounts Title'
    selectedMarkerValue = '';
    @wire(lwcMap) 
    accounts({data, error}) {
        if (data) {
            console.log(data);
            this.formatResponse(data);
        } else if(error) {
            console.error(error);
        }
    }

    formatResponse(data) {
        this.mapMarkers = data.map(item=> {
            return {
                location : {
                    Street : item.BillingCity || '',
                    City   : item.BillingCity || '',
                    PostalCode : item.BillingPostalCode || '',
                    State : item.BillingState || '',
                    Country : item.BillingCountry || ''

                },
                icon: 'utility:salesforce1',
                title: item.Name,
                value: item.Name,
                description: item.description
            }
        })
        this.selectedMarkerValue = this.mapMarkers.length && this.mapMarkers[0].value;
    }
    
    callMarkerHandler(event) {
        this.selectedMarkerValue = event.target.value;
        console.log(this.selectedMarkerValue);
    }
}