import { Component,Input,Output,EventEmitter} from '@angular/core';
/*
  import { TaskComponent } from './task/task.component';
  import { NewTaskComponent } from './new-task/new-task.component';
*/
import { type NewTask } from './new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
    selector: 'app-tasks',
    /*
      imports: [TaskComponent,NewTaskComponent],
      standalone:true,
    */
    standalone:false, // migrating from standalone to module approach
    templateUrl: './tasks.component.html',
    styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name!:string;
  @Input({required:true}) userId!:string;
  isAddingTask=false;

  constructor(private tasksService:TasksService){}

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask(){
    this.isAddingTask=true;
  }

  onCloseAddTask(){
    this.isAddingTask=false;
  }
}
