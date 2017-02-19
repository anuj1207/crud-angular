import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {AppService} from "./app.singletonService";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {HomeComponent} from "./home/home.component";
import {UpdateComponent} from "./update-task/updateTask.component";
import {TaskListComponent} from "./task-list/taskList.component";
import {CreateTaskComponent} from "./create-task/createTask.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


@NgModule({
  imports:      [ BrowserModule , RouterModule.forRoot(routes), FormsModule, CommonModule, ReactiveFormsModule],
  declarations: [ AppComponent ,HomeComponent, UpdateComponent, TaskListComponent, CreateTaskComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ AppService, ]
})
export class AppModule { }
