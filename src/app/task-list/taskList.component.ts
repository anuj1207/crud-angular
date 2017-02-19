import {Component, OnInit} from '@angular/core'
import {AppService} from "../app.singletonService";
import {Task} from "../task";
import {Router} from "@angular/router";

@Component({
  selector: 'taskList',
  templateUrl: './app/task-list/taskList.component.html',
  styleUrls: [''],
})

export class TaskListComponent implements OnInit{
  tasks:Task[];
  constructor(private service: AppService,private router: Router){};
  ngOnInit(){
    this.tasks = this.service.tasks;
  }
  deleteTask(i:number){
    this.tasks.splice(i,1);
  }
  redirect(index :number) {
    this.router.navigate(['updateTask',index]);
  }
}
