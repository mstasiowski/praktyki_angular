import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-done-task-tut',
  templateUrl: './done-task-tut.component.html',
  styleUrls: ['./done-task-tut.component.css']
})
export class DoneTaskTutComponent implements OnInit {

  // @Input() tasksDone: Array<string> =[];
  tasksDone :Array<Task> = [] ;

  constructor(private tasktaskService:TaskService) 
  { 
    this.tasktaskService.getTasksDoneObs().subscribe((tasks: Array<Task>) =>
    {
      this.tasksDone = tasks;
    });
  }

  ngOnInit(): void {
  }

}
