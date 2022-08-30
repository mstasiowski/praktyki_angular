import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { Task } from '../models/task';



@Injectable()
export class TaskService{

    newTask: string;
    private taskList:Array<Task> =[];
    private tasksDone: Array<Task> =[];

    selected(task:string):void{console.log(task)};
    
    private taskListObs = new BehaviorSubject<Array<Task>>([]);
    private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);

    constructor()
     {  
         this.taskList =  [
          {name:'sprzątanie', created:new Date()},
         {name:'gotowanie', created:new Date()},
         {name:'pranie', created: new Date()},
         {name:'nauka', created: new Date()}];
         this.taskListObs.next(this.taskList);
     }
  
    
  
    add(task: Task){
      this.taskList.push(task);
      this.taskListObs.next(this.taskList)
      
    }
  
    remove(task: Task){
      this.taskList = this.taskList.filter(e =>e !==task)
      this.taskListObs.next(this.taskList);

    }
  
    done(task: Task){
      this.tasksDone.push(task);
      this.remove(task);
      this.tasksDoneObs.next(this.tasksDone);
    }
  
    getTasksListObs(): Observable<Array<Task>>{
        return this.taskListObs.asObservable();
    }
    getTasksDoneObs(): Observable<Array<Task>>{
        return this.tasksDoneObs.asObservable();
    }
}