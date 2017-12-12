import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDirective } from './drag-drop/drag.directive';
import { DropDirective } from './drag-drop/drop.directive';
import {DragDropService,DragData} from './drag-drop.service';
import { TestDirective } from './forTest/test.directive'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DragDirective, 
    DropDirective, TestDirective
  ],
  exports:[
    DragDirective, 
    DropDirective,
    DropDirective, TestDirective
    
  ],
  providers:[
    DragDropService
  ]
})
export class DirectiveModule { }
export {DragData};
