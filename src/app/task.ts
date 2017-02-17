export class Task {

  title:string;
  description:string;
  priority:string;
  date:Date;
  constructor(){
    this.date = null;
    this.description = '';
    this.title = '';
    this.priority = '';
  }
}
