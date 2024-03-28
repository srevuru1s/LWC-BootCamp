
import { LightningElement } from 'lwc';

export default class FellowForce1 extends LightningElement {
    data1 = 'Building Blocks for LWC';

    details = {
        Name : "Sagar",
        Course : "B.Tech",
        College : "VIT",
        Location : "Vellore",
        Skills : "LWC, Aura, Javascript",
        Experience : "1 Year",
        Salary : 4
    }
    
    arrayEmployees = [
        {
            Name : "Sagar",
            Course : "B.Tech",
            College : "VIT",
            Location : "Vellore",
            Skills : "LWC, Aura, Javascript",
            Experience : "1 Year",
            Salary : 4
        },
        {
            Name : "Ava",
            Course : "B.Tech",
            College : "VIT",
            Location : "Vellore",
            Skills : "LWC, Aura, Javascript",
            Experience : "1 Year",
            Salary : 7
        },
        {
            Name : "Hani",
            Course : "B.Tech",
            College : "VIT",
            Location : "Vellore",
            Skills : "LWC, Aura, Javascript",
            Experience : "1 Year",
            Salary : 10
        }
    ]

    get getGrade(){
        const employeeGrade = this.details.Salary >= 5 ? 'Excellent' : 'Not Exquisite';
        return employeeGrade;
    }
}