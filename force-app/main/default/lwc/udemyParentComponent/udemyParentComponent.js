import { LightningElement } from "lwc";

export default class UdemyParentComponent extends LightningElement {
  names = ["John", "Doe", "Mayer"];

  handleClick() {
    const h1Element = this.template.querySelector("h1");
    h1Element.innerText = "Hello World LWC is Simple";
    console.log(h1Element);
    h1Element.style.border = "1px solid red";
    h1Element.style.color = "blue";

    const h1Class = this.template.querySelectorAll(".myname");

    Array.from(h1Class).forEach((element) => {
      console.log(element.innerText);
      element.innerText = "Hello World LWC is Simple";
      element.setAttribute("title", element.innerText);
    });
  }

  carouselData = [
    {
      src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
      header: "First Card",
      description: "First card description."
    },
    {
      src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
      header: "Second Card",
      description: "Second card description."
    },
    {
      src: "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
      header: "Third Card",
      description: "Third card description."
    }
  ];
  percentage = 10;
  onChange(event) {
    this.percentage = event.target.value;
  }

  handleResetSlider() {
    this.template.querySelector(".resethandler").resetSlider();
  }

  userDetails = {
    firstName: "John",
    lastName: "Doe",
    age: 42,
    location: "Seattle, WA"
  };
}
