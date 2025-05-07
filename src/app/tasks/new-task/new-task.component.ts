import { Component,Input,Output,EventEmitter,inject } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  /*
    imports: [FormsModule],
    standalone:true,
  */
  standalone:false, // migrating from standalone to module approach
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  @Input({required:true}) userId!:string;
  @Output() close=new EventEmitter<void>();

  private tasksService=inject(TasksService);

  enteredTitle='';
  enteredSummary='';
  enteredDueDate='';

  onClose(){
    this.close.emit();
  }

  onCreateTask(){

    this.tasksService.addTask({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      dueDate:this.enteredDueDate,
    },this.userId);

    this.close.emit();

  }
}
