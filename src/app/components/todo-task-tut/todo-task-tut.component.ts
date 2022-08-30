
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-todo-task-tut',
  templateUrl: './todo-task-tut.component.html',
  styleUrls: ['./todo-task-tut.component.css']
})
export class TodoTaskTutComponent implements OnInit {

  // @Input() taskList :Array<string> =[];
     taskList : Array<Task> = [];
  // @Output()
  // emitDone = new EventEmitter<string>();

  // @Output()
  // emitRemove = new EventEmitter<string>();

  constructor(private tasktaskService:TaskService ) 
  { 
    this.tasktaskService.getTasksListObs().subscribe((tasks: Array<Task>)=>{
    this.taskList =tasks.slice();
    })
  }
  

  ngOnInit(): void {
  }

  remove(task: Task)
  {
    // this.emitRemove.emit(task);
    this.tasktaskService.remove(task);
  }

  done(task: Task)
  {
    task.end = new Date();
    // this.emitDone.emit(task);
    this.tasktaskService.done(task)

  }

  getColor():string
  {
    return this.taskList.length >= 5 ? 'red' : 'green'; 
  }
}
