import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    number1 ="";
    number2 ="";
    result = 0;

    changeHandler(event){
        
        let name  = event.target.name;
        let value = event.target.value;

        if (name === "number1") {
            this.number1 = event.target.value;
        } else {
            this.number2 = event.target.value;
        }        
    };   

    calculateInput(event) {
        let {label: labelelement} = event.target;

        if(labelelement === "Add") {
            this.result = parseInt(this.number1) + parseInt(this.number2);
        } else if(labelelement === "Substraction") {
            this.result = parseInt(this.number1) - parseInt(this.number2);
        } else if(labelelement === "Multiplication") {
            this.result = parseInt(this.number1) * parseInt(this.number2);
        } else if(labelelement === "Division") {
            this.result = parseInt(this.number1) / parseInt(this.number2);
        }
        //* reset the values
        this.number1 = "";
        this.number2 = "";
    };
  
    // //* Based on the call targenting the element in html
    // changeHandler(event) {
    //     let element = this.template.querySelector(".slds-var-p-around_medium");
        
    //     //* condition to verify the values
    //     if (element.target.value === "number1") {
    //         this.number1 = event.target.value;
    //     } else {
    //         this.number2 = event.target.value;
    //     }  
   
    // };
    // //* calculator
    // calculateInput(event) {
    //     let element = this.template.querySelector(".slds-var-p-around_small");
    //     if (element.target.label === "Add") {
    //         this.result = parseInt(this.number1) + parseInt(this.number2);
    //     } else if(element.target.label === "Substraction"){
    //         this.result = parseInt(this.number1) - parseInt(this.number2);
    //     } else if(element.target.label === "Multiplication"){
    //         this.result = parseInt(this.number1) * parseInt(this.number2);
    //     } else if(element.target.label === "Division") {
    //         this.result = parseInt(this.number1) / parseInt(this.number2);
    //     }
    // };
};