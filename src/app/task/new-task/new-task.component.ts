import { Component, OnInit,Inject,ChangeDetectionStrategy } from '@angular/core';
import {MD_DIALOG_DATA,MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NewTaskComponent implements OnInit {

  title="";

  priorities=[
    {
      label:'紧急',
      value:'1'
    },
    {
      label:'重要',
      value:'2'
    },
    {
      label:'普通',
      value:'3'
    }
  ];

  constructor(
    @Inject(MD_DIALOG_DATA) private data,
    private dialogRef:MdDialogRef<NewTaskComponent> ) { }

  ngOnInit() {
    this.title=this.data.title;
    console.log(JSON.stringify(this.data.task))
  }

  onClick(){
    this.dialogRef.close("点击保存任务")
  }
}
