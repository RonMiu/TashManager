import { Component, OnInit,Input,Output,EventEmitter,HostBinding,HostListener,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import {cardAnim} from '../../animate/card.animate'

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations:[cardAnim],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() onInvite = new EventEmitter<void>();
  @Output() onEdit = new EventEmitter<void>();
  @Output() onDelete = new EventEmitter<void>();
  @HostBinding('@card') cardState='out';
  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event) {
      console.log(event.target);
      this.cardState = 'hover';
  }
  @HostListener('mouseleave')
  onmouseleave() {
      this.cardState = 'out';
  }

  constructor() { }

  ngOnInit() {
  }
  onInviteClick(){
    this.onInvite.emit();
  }
  onEditClick(){
    this.onEdit.emit();
  }
  onDeleteClick(){
    this.onDelete.emit();
  }

}
