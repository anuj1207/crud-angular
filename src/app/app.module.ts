import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {AppService} from "./app.singletonService";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {HomeComponent} from "./home/home.component";


@NgModule({
  imports:      [ BrowserModule , RouterModule.forRoot(routes)],
  declarations: [ AppComponent ,HomeComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ AppService, ]
})
export class AppModule { }
