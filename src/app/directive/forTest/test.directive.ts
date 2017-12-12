import { Directive,HostBinding,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[greet]'
})

export class TestDirective {

  @Input()
  greet:string;

  // @HostBinding()
  // innerText="heolo, this is test"

  @HostBinding() get innerText() {
      return this.greet;
  }

  @HostListener('click',['$event'])
    onclick(){
      this.greet="changkd"
    }

  constructor() { }

}
