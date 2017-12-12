import { Component, OnInit,Input,Inject,ChangeDetectionStrategy } from '@angular/core';
import {MD_DIALOG_DATA,MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-copy-task',
  templateUrl: './copy-task.component.html',
  styleUrls: ['./copy-task.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CopyTaskComponent implements OnInit {

  // @Input()
  lists:any[];

  constructor(
    @Inject(MD_DIALOG_DATA) private data,
    private dialogRef:MdDialogRef<CopyTaskComponent>
  ) { }

  ngOnInit() {
    this.lists=this.data.lists;
    console.log("copy-task的lists",this.lists)
  }
  onClick(){
    this.dialogRef.close()
  }

}
