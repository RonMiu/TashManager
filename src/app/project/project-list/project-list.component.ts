import { Component, OnInit,HostBinding,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import {MdDialog} from'@angular/material';
import {NewProjectComponent} from '../new-project/new-project.component'
import {InviteComponent} from '../invite/invite.component'
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component'
import {slideToRight} from '../../animate/router.animate'
import {listAnimation} from '../../animate/list.animate'

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations:[
    slideToRight,listAnimation
  ],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent implements OnInit {

  // @HostBinding('@routerAnimate') routerAnimateState

  projects =[
    {
      "id":1,
      "name":"企业协作平台",
      "desc":"内部项目",
      "coverImg":"assets/img/covers/0.jpg"
    },
    {
      "id":2,
      "name":"企业协作平台",
      "desc":"内部项目",
      "coverImg":"assets/img/covers/1.jpg"
    },
    {
      "id":3,
      "name":"企业协作平台",
      "desc":"内部项目",
      "coverImg":"assets/img/covers/2.jpg"
    }
  ]
  constructor(
    private dialog:MdDialog,
    private cd:ChangeDetectorRef
  ) { }

  ngOnInit() {
  }
  openNewProjectDialog(){
    const dialogRef=this.dialog.open(NewProjectComponent,{data:{title:"新增项目"}});
    dialogRef.afterClosed().subscribe(res=>{
        console.log(res);
        this.projects=[...this.projects,{id:4,name:'一个新项目',desc:'这是新项目',coverImg:'assets/img/covers/4.jpg'}]
        this.cd.markForCheck()
      })
    }

  launchInviteDIalog(){
    const dialogRef=this.dialog.open(InviteComponent);
    }
  
  launchUpdateDialog(){
    const dialogRef=this.dialog.open(NewProjectComponent,{data:{title:"编辑项目"}});
  }

  launchDeleteDialog(project){
    const dialogRef=this.dialog.open(ConfirmDialogComponent,{data:{title:"删除项目",content:"确定删除此项目?"}});
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
      this.projects=this.projects.filter(p=>p.id!==project.id);
      this.cd.markForCheck()
    })    
  }
  
}
