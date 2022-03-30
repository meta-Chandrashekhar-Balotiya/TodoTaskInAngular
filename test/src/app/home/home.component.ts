import { Component, OnInit } from '@angular/core';
import { NgModel, RadioControlValueAccessor } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskComponent } from '../add-task/add-task.component';
import { addTaskService } from '../_services/_common-services'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  dialogRef: any;

  // taskarray : any[]  = addTaskServic
  taskarr : any[] = [{taskType:"high",taskTitle:"task1"},{taskType:"low",taskTitle:"task2"}];

  newTask:string = ""
  newTaskPriority:string= ""
  
  constructor(
    public dialog: MatDialog,
    public addtaskservice : addTaskService) { 

      // Part of parent component
  //   this.addtaskservice.getTask().subscribe(data => {
  //           // debugger
  //           console.log(data);
  //           }
  //         );
  //   console.log(this.addtaskservice);
   }

  ngOnInit(): void {
  }


  deleteTask(){
    
  }
  openDialog(){
    const myDialog = this.dialog.open(AddTaskComponent);
  }
}

