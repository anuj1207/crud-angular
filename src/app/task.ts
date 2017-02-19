export class Task {

  title:string;
  description:string;
  priority:string;
  date:Date;
  constructor(newDate?: Date, newTitle?: string, newDescription?: string, newPriority?: string){
    this.date = newDate;
    this.description = newDescription;
    this.priority = newPriority;
    this.title = newTitle;
  }

}
