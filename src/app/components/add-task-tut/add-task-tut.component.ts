import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-add-task-tut',
  templateUrl: './add-task-tut.component.html',
  styleUrls: ['./add-task-tut.component.css']
})
export class AddTaskTutComponent implements OnInit {

  newTask: string;
  // @Output()
  // emitTask = new EventEmitter<string>();

  constructor(private tasktaskService:TaskService ) { }

  ngOnInit(): void {
  }

  add(){
    const task: Task =({name:this.newTask,created: new Date()})
    // this.emitTask.emit(this.newTask);
    this.tasktaskService.add(task);
    this.newTask ='';
  }

}
