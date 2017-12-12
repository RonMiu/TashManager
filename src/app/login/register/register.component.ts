import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  form:FormGroup;
  items:string[];
  private readonly avatarName = 'avatars';

  ngOnInit() {
    const img = `${this.avatarName}:svg-${(Math.random() * 16).toFixed()}`;
    const nums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    this.items=nums.map((d)=>`avatars:svg-${d}`)
    this.form=this.fb.group({
      email:['',Validators.compose([Validators.required,Validators.email])],
      name:['',Validators.compose([Validators.required,Validators.minLength(6)])],
      password:['',Validators.compose([Validators.required,Validators.minLength(6)])],
      confirmPassword:['',Validators.compose([Validators.required,Validators.minLength(6)])],
      avatar:[img],
      dateOfBirth:['1990-01-01']
    })
  }
  onSubmit(form,event:Event){
    event.preventDefault()
    if(!form.valid){
      return
    }
    console.log(form.value)
  }
  onChange(event:Event){

  }

}
