import { LightningElement, track } from 'lwc';

export default class LwcComponentOne extends LightningElement {
    //* Declaring the html
     greeting = "Good Morning";
     message  = "Nothing will stop to Learn";

    clickHandler1(event) {
        this.greeting = "Namaskar Folks";
        this.message  = "Anything is possible by efforts";
    }
    //* Use of tract decorator with object
     myDetails = {fname: "Sagar", lname: "Revuru"};
    clickHandler2(event) {
        this.myDetails =  {fname :"Ava1", lname :"Revuru1"};
        
    }
    //* Use of tract decorator with array
    myArray = [20,40,2021,2023];
    clickHandler3(event) {
        this.myArray = [...this.myArray,2026,2028];
    }

    //* getter example
    users = ['sagar', 'ava', 'hani'];
    number1 = 20;
    number2 = 30;

    get firstuser() {

        return this.users[0];
    }
    get multiply() {
        return this.number1 * this.number2;
    }

}