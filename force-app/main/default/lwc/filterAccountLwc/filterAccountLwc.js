import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
export default class FilterAccountLwc extends LightningElement {
    headings = ["Id", "Name", "Title", "Email"];
    fullTableData = [];
    filteredData =  [];
    timer='';

    @wire(getContactList)
    contactHandler({data, error}) {
        if (data) {
            console.log(data)
            this.fullTableData = data;
            this.filteredData = data;
        } else if(error) {
            console.error(error)
        }
    }

    filterHandler(event){

        let filterValue = event.target.value;
        console.log(filterValue);
        window.clearTimeout(this.timer);
        console.log('Timer:',this.timer)
        this.timer = window.setTimeout(() =>{

            //* Object.keys(eachObject) = ["Id", "Name", "Title", "Email"]
        this.filteredData = this.fullTableData.filter(eachObj =>{
            return Object.keys(eachObj).some(key => {
                return eachObj[key].includes(filterValue)});
            
        })
        }, 500);
        
    }
}