import { Component, OnInit,Input, Output, EventEmitter,HostBinding,HostListener,ChangeDetectionStrategy } from '@angular/core';
import {itemAnim} from '../../animate/item.animate';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations:[itemAnim],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TaskItemComponent implements OnInit {

  @Input()
  list:Object;
  @Input()
  task:Object[];
  @Input()
  avatar:string;
  @Output()
  taskClick=new EventEmitter<void>()
  @HostBinding('@item') itemState='out';
  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event) {
      // console.log(event.target);
      this.itemState = 'hover';
  }
  @HostListener('mouseleave')
  onmouseleave() {
      this.itemState = 'out';
  }

  constructor() { }

  onItemClick(){
    this.taskClick.emit()
  }

  ngOnInit() {
    this.avatar=this.task['owner']?this.task['owner'].avatar:"unassigned";
  }

  onCheckBoxClick(event:Event){
    event.stopPropagation();
  }
}
