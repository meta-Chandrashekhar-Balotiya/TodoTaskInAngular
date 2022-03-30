import { Injectable } from '@angular/core';
import { BehaviorSubject, from } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class addTaskService {

    public taskArr : any[] = [{taskType:"",taskTitle:""}];

    public obsTaskArr = from(this.taskArr);
    private approvalStageMessage = new BehaviorSubject('Basic Approval is required!');
    currentApprovalStageMessage = this.approvalStageMessage.asObservable();

    constructor() {
      // this.taskArr.push({taskType:"high",taskTitle:"task1"});
    } 

   getTask(){

      return this.obsTaskArr;
   }

   updateTask(value1:string,value2:string){
      if(value2 !== " "){
         this.taskArr.push({taskType:value1,taskTitle:value2});
      }
   }


   // Take a look
   deleteTask({value1,value2}:any){
     // this.taskArr = this.taskArr.filter({value1,value2} => value1 != this.taskArr.values.priority && value2 != this.taskArr.values.description);
      this.taskArr.forEach(({element1,element2},index)=>{
         if(element1==value1 && element2==value2) delete this.taskArr[index];
      });
   }

 updateApprovalMessage(message: string) {
 this.approvalStageMessage.next(message)
 }
}