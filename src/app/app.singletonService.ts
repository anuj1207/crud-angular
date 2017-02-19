import {Injectable} from "@angular/core";
import {Task} from "./task";

@Injectable()
export class AppService{
  tasks:Task[] = [];
}
