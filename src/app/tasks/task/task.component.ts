// import { CardComponent } from './../../shared/card/card.component';
import { Component,Input,inject } from '@angular/core';
// import { DatePipe } from '@angular/common';
import {type Task} from './task.model'
import { TasksService } from '../tasks.service';



@Component({
  selector: 'app-task',
  /*
    standalone:true,
    imports: [CardComponent, DatePipe],
  */
  standalone:false, // migrating from standalone to module approach
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required:true}) task!:Task;

  private tasksService=inject(TasksService);

  OnCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }
}
