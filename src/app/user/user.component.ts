import { Component,Input,Output,EventEmitter } from '@angular/core';

import {type User} from './user.model'
// import { CardComponent } from '../shared/card/card.component';
// // required when stanalone components approach


@Component({
    selector: 'app-user',
    /*
      standalone:true,
      imports: [CardComponent],
    */ // for standalone approach
    standalone:false, // migration from standalone to module approach
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
  //selectedUser=DUMMY_USERS[randomIndex];

  /*
    get ImagePath(){
      return 'assets/users/' + this.selectedUser.avatar;
    }


  selectedUser=signal(DUMMY_USERS[randomIndex]);
  ImagePath=computed(()=>'assets/users/'+this.selectedUser().avatar);

  onSelectUser(){
    const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);
    //this.selectedUser=DUMMY_USERS[randomIndex];
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
  */
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;
  // @Input({required:true}) id!: string;

  /*
    @Input({required:true}) user!:{
      id:string;
      avatar:string;
      name:string;
    }

  */
  @Input({required:true}) user!:User;
  @Input({required:true}) selected!:boolean;
  @Output() select=new EventEmitter();

  get ImagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
