import { Component,OnInit } from '@angular/core'
import {Task} from "../task";
import {AppService} from "../app.singletonService";
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'createTask',
  templateUrl:'./app/create-task/createTask.component.html',
  styleUrls: [''],
})

export class CreateTaskComponent implements OnInit{

  tasks:Task[];
  addForm: FormGroup;
  constructor(private service: AppService,private formBuilder: FormBuilder){};
  ngOnInit(){
    this.tasks = this.service.tasks;
    this.addForm = this.formBuilder.group({
      date: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      priority: ['', Validators.required]
    })
  }

  addTask() {
    if (this.addForm.valid) {
      var addTask = {
        date: this.addForm.controls['date'].value,
        title: this.addForm.controls['title'].value,
        description: this.addForm.controls['description'].value,
        priority: this.addForm.controls['priority'].value,
      };
      console.log(addTask);// adduser var contains all our form values. store it where you want
      this.addForm.reset();// this will reset our form values to null
      this.tasks.push(new Task(addTask.date,addTask.title,addTask.description,addTask.priority))
    }
  }

}
