import { Component, OnInit,Inject } from '@angular/core';
import {MD_DIALOG_DATA,MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  items=[
    {
      id:1,
      name:"张三"
    },
    {
      id:2,
      name:"李四"
    },
    {
      id:1,
      name:"伍佰"
    }
  ];
  
  constructor( @Inject(MD_DIALOG_DATA) private data,
  private dialogRef:MdDialogRef<InviteComponent>) { }

  ngOnInit() {
  }
  onClick(){
    this.dialogRef.close()
  }

}
