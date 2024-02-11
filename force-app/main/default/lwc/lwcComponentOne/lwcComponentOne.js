import { LightningElement, track } from 'lwc';

export default class LwcComponentOne extends LightningElement {
    //* Declaring the html
    @track greeting = "Good Morning";
    @track message  = "Nothing will stop to Learn";

    clickHandler1(event) {
        this.greeting = "Namaskar Folks";
        this.message  = "Anything is possible by efforts";
    }
    //* Use of tract decorator with object
    @track myDetails = {fname: "Sagar", lname: "Revuru"};
    clickHandler2(event) {
        this.myDetails.fname = "Ava";
        this.myDetails.lname = "Sagar Revuru";
    }
    //* Use of tract decorator with array
    @track myArray = [20,40,2021,2023];
    clickHandler3(event) {
        this.myArray = [...this.myArray,2026,2028];
    }
}