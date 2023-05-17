import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent {
em:any;

  employeeList:Emplpyee[]=[]
  constructor( private httpClient: HttpClient) {
  
  }

ngOnInit(){
  this.getEmployeeData();
  console.log(this.employeeList);
  
  // this.getEmployeeDetails().subscribe(res=>{
    // if(res){
      // this.em=res
     
      // console.log(this.em);
    // }})

//  console.log(this.em);
    // for (let i = 0; i < this.employeeList.length; i++) {
      // const dateEnd: Date = new Date(this.employeeList[i].endTimeUtc!);
      // const dateStart: Date = new Date(this.employeeList[i].starTimeUtc!);
            
      // const timeDifferenceMs: number = dateEnd.getTime() - dateStart.getTime();
      // let employee:Emplpyee1=new Emplpyee1();

      // employee.totalTimeInHr = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
      // employee.totalTimeInMin = Math.floor((timeDifferenceMs / (1000 * 60)) % 60);
      // employee.employeeName=this.employeeList[i].employeeName
      // employee.id=this.employeeList[i].id
      // employee.deletedOn=this.employeeList[i].deletedOn
      // employee.endTimeUtc=this.employeeList[i].endTimeUtc
      // employee.starTimeUtc=this.employeeList[i].starTimeUtc
      // employee.entryNotes=this.employeeList[i].entryNotes
      // this.employeeList1?.push(employee)
      
    // }
    // console.log(this.employeeList1);
    
    
}
getEmployeeData() {
  this.httpClient.get<any>('https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==').subscribe(
    (data: any) => {
      this.em = data
      this.em.forEach((element:any) => {
        let employee:Emplpyee=new Emplpyee();
        employee.id=element.Id
        employee.employeeName=element.EmployeeName
        employee.deletedOn=element.DeletedOn
employee.endTimeUtc=element.EndTimeUtc
employee.starTimeUtc=element.StarTimeUtc
employee.entryNotes=element.EntryNotes

let dateEnd: Date = new Date(employee.endTimeUtc!);
let dateStart: Date = new Date(employee.starTimeUtc!);
   
let timeDifferenceMs: number = dateEnd.getTime() - dateStart.getTime();
employee.totalTimeInHr = Math.floor(timeDifferenceMs / (1000 * 60 * 60));
employee.totalTimeInMin = Math.floor((timeDifferenceMs / (1000 * 60)) % 60);
        this.employeeList.push(employee)
        
      });
     // console.log(this.em);

     this.employeeList = this.employeeList.sort((a, b) =>(a.totalTimeInMin!-b.totalTimeInMin!));
     this.employeeList = this.employeeList.sort((a, b) => (a.totalTimeInHr!  - b.totalTimeInHr!));
      console.log(this.employeeList);
      
      
    },
    (error) => {
      console.log('Error retrieving employee data:', error);
    }
  );
}
getEmployeeDetails():Observable<any>{
  return this.httpClient.get<any>('https://rc-vault-fap-live-1.azurewebsites.net/api/gettimeentries?code=vO17RnE8vuzXzPJo5eaLLjXjmRW07law99QTD90zat9FfOQJKKUcgQ==');
}


}









class Emplpyee{
  id?:string
  employeeName?:string
  starTimeUtc?:string
  endTimeUtc?:string
  entryNotes?:string
  deletedOn?:string
  totalTimeInHr?:number
totalTimeInMin?:number

}