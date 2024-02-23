import { LightningElement } from 'lwc';

import signinTemplate from './signinTemplate.html';
import signupTemplate from './signupTemplate.html';
import renderMethod from './renderMethod.html';

export default class RenderMethod extends LightningElement {

    selectBtn="";
    render() {
        return this.selectBtn === 'signup' ? signupTemplate :
               this.selectBtn === 'signin' ? signinTemplate :
               renderMethod;
    }

    handleClick(event) {
        this.selectBtn = event.target.label;
    }
}