import { LightningElement } from 'lwc';

export default class LwcTemplateLooping extends LightningElement {
    carList = ["Ford", "KIA", "Hundai", "Tata"];

    ceoList = [
        {
            id: 1,
            company: "Google",
            ceo: "Sundar"
        },
        {
            id:2,
            company: "Mark",
            ceo: "Face book"
        }
    ]
}