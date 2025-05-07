import { Component } from "@angular/core";

@Component({
  selector:'app-header',
  //standalone:true, // for standalone component approach
  standalone:false, // migrating standalone component to module approach
  templateUrl:'./header.component.html',
  styleUrl:'./header.component.css'
})
export class HeaderComponent {}

