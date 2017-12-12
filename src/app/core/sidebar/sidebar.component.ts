import { Component, OnInit,Output,EventEmitter } from '@angular/core';
// import {getDate} from 'date-fns'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  today:string ="day";
  @Output() navClick=new EventEmitter<void>()

  constructor() { }

  ngOnInit() {
    this.today=`day${new Date().getDate()}`;
  }
    
  onNavClick(){
    this.navClick.emit()
  }

}
