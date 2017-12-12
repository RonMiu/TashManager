import { Component, OnInit, HostBinding,ChangeDetectionStrategy,ChangeDetectorRef } from '@angular/core';
import {MdDialog} from'@angular/material';
import {NewProjectComponent} from '../../project/new-project/new-project.component'
import {NewTaskComponent} from '../new-task/new-task.component'
import {CopyTaskComponent} from '../copy-task/copy-task.component'
import {ConfirmDialogComponent} from '../../shared/confirm-dialog/confirm-dialog.component'
import {NewTaskListComponent} from '../new-task-list/new-task-list.component'
import {slideToRight} from '../../animate/router.animate'
// import { Event } from '_debugger';


@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations:[
    slideToRight
  ],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TaskHomeComponent implements OnInit {

  // @HostBinding('@routerAnimate') routerAnimateState;

  constructor(
    private dialog:MdDialog,
    private cd:ChangeDetectorRef
  ) { }

  lists=[
    {
      id:1,
      name:'待办',
      order:1,
      tasks:[
        {
          id:1,
          desc:'任务一:麦咖啡+金拱门+汉堡包+鸡腿堡',
          completed:false,
          priority:2,
          owner:{
            id:1,
            name:'张三',
            avatar:'avatars:svg-11'
          },
          dueDate:new Date(),
          reminder:true,
        },
        {
          id:2,
          desc:'任务二:更新资料',
          completed:false,
          priority:3,
          owner:{
            id:1,
            name:'张三',
            avatar:'avatars:svg-11'
          },
          dueDate:new Date(),
          reminder:false,
        }
      ]
    },
    {
      id:2,
      name:'进行中',
      order:2,
      tasks:[
        {
          id:1,
          desc:'任务二:开黑',
          completed:false,
          priority:3,
          owner:{
            id:1,
            name:'李四',
            avatar:'avatars:svg-12'
          },
          dueDate:new Date(),
          reminder:true,
        }
      ]
    },
    {
      id:3,
      name:'已完成',
      order:3,
      tasks:[
        {
          id:1,
          desc:'任务三:打天地',
          completed:true,
          priority:1,
          owner:{
            id:1,
            name:'伍佰',
            avatar:'avatars:svg-15'
          },
          dueDate:new Date(),
          reminder:false,
        }
      ]
    }
  ];

  ngOnInit() {
  }
  
  openNewListDialog(){
    const dialogRef=this.dialog.open(NewTaskListComponent,{data:{title:"新建列表"}});
    dialogRef.afterClosed().subscribe(res=>
        {
          console.log(res);
          // this.cd.markForCheck()
        }
      )
    }

  launghNewTaskDiolog(){
    const dialogRef=this.dialog.open(NewTaskComponent,{data:{title:"新建项目"}});
    dialogRef.afterClosed().subscribe(res=>console.log("点击保存任务"))
  }

  launghCopyTaskDialog(){
    const dialogRef=this.dialog.open(CopyTaskComponent,{data:{lists:this.lists}});
    dialogRef.afterClosed().subscribe(res=>console.log("点击保存任务"))
  }
  launchUpdateTaskDialog(task){
    const dialogRef=this.dialog.open(NewTaskComponent,{data:{title:"修改任务",task:task}});
    dialogRef.afterClosed().subscribe(res=>console.log("点击保存任务"))
  }
  launghDeleteDialog(){
    const dialogRef=this.dialog.open(ConfirmDialogComponent,{data:{title:"删除项目",content:"确定删除此项目?"}});
    dialogRef.afterClosed().subscribe(res=>console.log(res))
  }
  launghEditDialog(){
    const dialogRef=this.dialog.open(NewTaskListComponent,{data:{title:"更改列表名称"}});    
  }

  handleMove(srcData, list) {
    // console.log(srcData)
    switch (srcData.tag) {
      case 'task-item': {
        console.log('item')
        break;
      }
      case 'task-list': {
        console.log('list',list)
        console.log('srcData',srcData)
        const srcList = srcData.data;
        const tempOrder = srcList.order;
        srcList.order=list.order;
        list.order=tempOrder;
        break;
      }
      default:
        break;
    }
  }
  getDesc(desc:string){
    console.log("desc",desc)
  }
  getTask($event,i){
    console.log("task",$event)
    let newTask={
      id:1,
      desc:'',
      completed:false,
      priority:1,
      owner:{
        id:1,
        name:'伍佰',
        avatar:'avatars:svg-15'
      },
      dueDate:new Date(),
      reminder:false,
    };
    newTask.desc=$event.newTask;
    console.log(newTask)
    this.lists[i].tasks.push(newTask)
    // console.log(i)
  }
}
