import {Injectable} from "@angular/core";
import {Task} from "./task";

@Injectable()
export class AppService{
  task:Task[] = [{
    date : null,
    description : '',
    title : '',
    priority : ''}];
}
