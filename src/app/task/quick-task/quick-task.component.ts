import { Component, OnInit,HostListener,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quick-task',
  templateUrl: './quick-task.component.html',
  styleUrls: ['./quick-task.component.scss']
})
export class QuickTaskComponent implements OnInit {

  constructor() { }

  @Output()
  sendDesc=new EventEmitter()
  @Output()
  sendTask=new EventEmitter()

  desc:string;
  ngOnInit() {
  }
  @HostListener('keyup.enter')
  enterKey(){
    this.sendDesc.emit(this.desc);
    console.log(this.desc)
    this.desc='';
  }

  onSubmit(f,ev:Event){
    ev.preventDefault();
    ev.stopPropagation();
    this.sendTask.emit(f.value);
    console.log("submit",f.value);
    this.desc='';
  }
}
