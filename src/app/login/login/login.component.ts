import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms'
import {Quote} from '../../domain/quote.model'
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import {Router} from '@angular/router'
import * as fromRoot from '../../reducers'
import * as actions from '../../actions/quote.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  quote$:Observable<Quote>;

  constructor(
    private fb:FormBuilder,
    private store$:Store<fromRoot.State>,
    private router:Router
  ) {
    this.quote$=this.store$.select(fromRoot.getQuote)
    this.store$.dispatch(new actions.LoadAction(null))
   }

  ngOnInit() {
    this.form=this.fb.group({
      email:['Ron@qq.com',Validators.compose([Validators.required,Validators.email])],
      password:['123456',Validators.compose([Validators.required,Validators.minLength(6)])]
    })
  }

  onSubmit(form,ev:Event){
    ev.preventDefault();
    if(form.valid){
      this.router.navigateByUrl('task')
    }
    // console.log(form.value)
    // console.log(JSON.stringify(form.value));
    // console.log(JSON.stringify(form.valid));
    // this.form.controls['email'].hasError('')
  }

}
