import { LightningElement, track } from "lwc";

export default class TwoWayDataBinding extends LightningElement {
  firstname = "John";
  lastname = "Doe";
  age = "25";
  moto = "";

  onkeyHandler(event) {
    this.moto = event.target.value;
  }
  address = {
    street: "Yucatan Dr",
    city: "Charlotte",
    state: "North Carolina",
    zip: "28173"
  };
  cars = ["Audi", "KIA", "Hundai"];
  addressHandler(event) {
    this.address = { ...this.address, street: event.target.value };
    this.cars = [...this.cars, "Toyota"];
  }

  @track myNumbers = [20, 30, 40, 50, 60];

  get getArryVale() {
    return this.myNumbers[0];
  }
  onclickHandler() {
    this.myNumbers[0] = 90;
  }
  ceoList = [
    {
      name: "John",
      age: "25",
      company: "Google"
    },
    {
      name: "John Doe",
      age: "28",
      company: "FB"
    },
    {
      name: "Ava ",
      age: "01",
      company: "Apple"
    },
    {
      name: "Jhon",
      age: "29",
      company: "Google"
    }
  ];
}
