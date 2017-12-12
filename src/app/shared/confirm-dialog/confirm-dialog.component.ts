import { Component, OnInit,Inject } from '@angular/core';
import {MD_DIALOG_DATA,MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  title="";
  content="";

  constructor(
    @Inject(MD_DIALOG_DATA) private data,
    private dialogRef:MdDialogRef<ConfirmDialogComponent>
  ) { }

  ngOnInit() {
    this.title=this.data.title;
    this.content=this.data.content;
  }

  onClick(result:boolean){
    this.dialogRef.close(result)
  }

}
