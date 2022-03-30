import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';
import { addTaskService } from '../_services/_common-services'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  
  myForm!: FormGroup;
 
  constructor(
    public dialogRef: MatDialogRef<AddTaskComponent>,
    public addtaskservice : addTaskService,
    private fb: FormBuilder,
    
  ) {}

  onSubmitClick(): void {
    if(this.myForm.valid){
      // console.log(this.myForm.value);
      // callling parent function
      // addTask();
      // description: "cde"
      // name: "abc"
      // priority: "low"

      if(this.myForm.value.description != ''){
        
          this.addtaskservice.updateTask(this.myForm.value.priority, this.myForm.value.description);

          // print in console
          this.addtaskservice.getTask().subscribe(data => {
            // debugger
            console.log(data);
            }
          );
        }
        
      }

      this.dialogRef.close();
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ["",Validators.required],
      priority: ["",Validators.required],
      description:["",Validators.required],
    });
  }

}


