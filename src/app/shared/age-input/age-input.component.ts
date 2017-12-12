// // import { Component, OnInit,Input,forwardRef,Output, EventEmitter,OnDestroy } from '@angular/core';
// // import {ControlValueAccessor,NG_VALUE_ACCESSOR,NG_VALIDATORS,Validators} from '@angular/forms'
// // import {FormControl,FormBuilder,FormGroup} from '@angular/forms'

// // import {Observable} from 'rxjs'
// // import {
// //   subDays,
// //   subMonths,
// //   subYears,
// //   differenceInDays,
// //   differenceInMonths,
// //   differenceInYears,
// //   isBefore,
// //   parse,
// //   format
// // } from 'date-fns'

// // export enum AgeUnit{
// //   Year=0,
// //   Month=1,
// //   Day=2
// // }
// // export interface Age{
// //   age:number;
// //   unit:AgeUnit;
// // }

// // @Component({
// //   selector: 'app-image-list-select',
// //   templateUrl: './image-list-select.component.html',
// //   styleUrls: ['./image-list-select.component.scss'],
// //   providers:[
// //     {
// //       provide:NG_VALUE_ACCESSOR,
// //       useExisting:forwardRef(()=>AgeInputComponent),
// //       multi:true
// //     },
// //     {
// //       provide: NG_VALIDATORS,
// //       useExisting: forwardRef(() => AgeInputComponent),
// //       multi: true,
// //     }
// //   ],
  
// // })
// // export class AgeInputComponent implements ControlValueAccessor, OnInit, OnDestroy {

// //   form:FormGroup;

// //   constructor(private fb:FormBuilder) { }
// //   dateOfBirth;

// //   ngOnInit() {
// //     this.form=this.fb.group({
// //       birthday:['',this.validateDate],
// //       age:this.fb.group({
// //         ageNum:[],
// //         ageUnit:[]
// //       },{validator:this.validateAge('ageNum','ageUnit')})
// //     })
  
// //     // 验证表单，验证结果正确返回 null 否则返回一个验证结果对象
// //   validate(c: FormControl): {[key: string]: any} {
// //     const val = c.value;
// //     if (!val) {
// //       return null;
// //     }
// //     if (isValidDate(val)) {
// //       return null;
// //     }
// //     return {
// //       ageInvalid: true
// //     };
// //   }

// //   validateDate(c: FormControl): {[key: string]: any} {
// //     const val = c.value;
// //     return isDate(val)
// //       && isValid(val)
// //   }

// //   validateAge(ageNumKey: string, ageUnitKey:string) {
// //     return (group: FormGroup): {[key: string]: any} => {
// //       const ageNum = group.controls[ageNumKey];
// //       const ageUnit = group.controls[ageUnitKey];
// //       let result = false;
// //       const ageNumVal = ageNum.value;

// //       switch (ageUnit.value) {
// //         case AgeUnit.Year: {
// //           result = ageNumVal >= this.yearsBottom && ageNumVal <= this.yearsTop
// //           break;
// //         }
// //         case AgeUnit.Month: {
// //           result = ageNumVal >= this.monthsBottom && ageNumVal <= this.monthsTop
// //           break;
// //         }
// //         case AgeUnit.Day: {
// //           result = ageNumVal >= this.daysBottom && ageNumVal <= this.daysTop
// //           break;
// //         }
// //         default: {
// //           result = false;
// //           break;
// //         }
// //       }
// //       return result ? null : {
// //         ageInvalid: true
// //       };
// //     };
// //   }

    
// //     const birthday =this.form.get('birthday');
// //     const ageNum = this.form.get('age').get('ageNum');
// //     const ageUnit = this.form.get('age').get('ageUnit');

// //     const birthDay$ = birthday.valueChanges
// //       .map(d=>{
// //         return {date:d,from:'birthday'}
// //       })
// //       .debounceTime(300)
// //       .distinctUntilChanged()
// //       .filter(_=>birthday.valid);
// //     const ageNum$ = ageNum.valueChanges
// //       .startWith(ageNum.value)
// //       .debounceTime(300)
// //       .distinctUntilChanged();
// //     const ageUnit$ = ageUnit.valueChanges
// //       .startWith(ageUnit.value)
// //       .debounceTime(300)
// //       .distinctUntilChanged();
// //     const age$=Observable
// //       .combineLatest(ageNum$,ageUnit$,(_n,_u)=>{
// //         return this.toDate({age:_n,unit:_u})
// //       })
// //       .map(d=>{
// //         return {date:d,from:'age'}
// //       })
// //       .filter(_=>this.form.get('age').valid)
// //     const merge$=Observable
// //       .merge(birthDay$,age$)
// //       .filter(_=>this.form.valid)
// //     merge$.subscribe(d=>{
// //       const age=this.toAge(d.date);
// //       if(d.from==='birthday'){
// //         if(age.age!==ageNum.value){
// //           ageNum.patchValue(age.age,{emitEvent:false});
// //         }
// //         if(age.unit!==ageUnit.value){
// //           ageUnit.patchValue(age.unit,{emitEvent:false})
// //         }
// //       }
// //     })
// //   }



// //   private propagateChange = (_: any) => {};
  
// //     // 写入控件值
// //     public writeValue(obj: any) {

// //     }
  
// //     // 当表单控件值改变时，函数 fn 会被调用
// //     // 这也是我们把变化 emit 回表单的机制
// //     public registerOnChange(fn: any) {
// //       this.propagateChange = fn;
// //     }

// //     public validate(c: FormControl) {
// //     }
  
// //     public registerOnTouched() {
// //     }

// //     private toAge(dateStr: string): Age {
// //       const date = parse(dateStr);
// //       const now = Date.now();
// //       if (isBefore(subDays(now, 90), date)) {
// //         return {
// //           age: differenceInDays(now, date),
// //           unit: AgeUnit.Day
// //         };
// //       } else if (isBefore(subMonths(now, 24), date)) {
// //         return {
// //           age: differenceInMonths(now, date),
// //           unit: AgeUnit.Month
// //         };
// //       } else {
// //         return {
// //           age: differenceInYears(now, date),
// //           unit: AgeUnit.Year
// //         };
// //       }
// //     }
  
// //     private toDate(age: Age): string {
// //       const now = Date.now();
// //       const dateFormat = 'YYYY-MM-DD'
// //       switch (age.unit) {
// //         case AgeUnit.Year: {
// //           return format(subYears(now, age.age),dateFormat);
// //         }
// //         case AgeUnit.Month: {
// //           return format(subMonths(now, age.age),dateFormat);
// //         }
// //         case AgeUnit.Day: {
// //           return format(subDays(now, age.age),dateFormat);
// //         }
// //         default: {
// //           return this.dateOfBirth;
// //         }
// //       }
// //     }

// // }



// import {ChangeDetectionStrategy, Component, forwardRef, OnInit, OnDestroy, Input} from '@angular/core';
// import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
// import {
//   subYears,
//   subMonths,
//   subDays,
//   isBefore,
//   differenceInDays,
//   differenceInMonths,
//   differenceInYears,
//   parse
// } from 'date-fns';
// import {Observable} from 'rxjs/Observable';
// import { Subscription } from 'rxjs/Subscription';
// import { toDate, isValidDate } from '../../util/date.util'

// export enum AgeUnit {
//   Year = 0,
//   Month,
//   Day
// }

// export interface Age {
//   age: number;
//   unit: AgeUnit;
// }

// @Component({
//   selector: 'app-age-input',
//   template: `
//     <div [formGroup]="form" class="age-input">
//       <div>
//         <md-input-container>
//           <input mdInput [mdDatepicker]="birthPicker" type="text" placeholder="出生日期" formControlName="birthday" >
//           <button mdSuffix [mdDatepickerToggle]="birthPicker" type="button"></button>
//           <md-error>日期不正确</md-error>
//         </md-input-container>
//         <md-datepicker touchUi="true" #birthPicker></md-datepicker>
//       </div>
//       <ng-container formGroupName="age">
//         <div class="age-num">
//           <md-input-container>
//             <input mdInput type="number" placeholder="年龄" formControlName="ageNum">
//           </md-input-container>
//         </div>
//         <div>
//           <md-button-toggle-group formControlName="ageUnit" [(ngModel)]="selectedUnit">
//             <md-button-toggle *ngFor="let unit of ageUnits" [value]="unit.value">
//               {{ unit.label }}
//             </md-button-toggle>
//           </md-button-toggle-group>
//         </div>
//         <md-error class="mat-body-2" *ngIf="form.get('age').hasError('ageInvalid')">年龄或单位不正确</md-error>
//       </ng-container>
//     </div>
//     `,
//   styles: [`
//     .age-num{
//       width: 50px;
//     }
//     .age-input{
//       display: flex;
//       flex-wrap: nowrap;
//       flex-direction: row;
//       align-items: baseline;
//     }
//   `],
//   providers: [
//     {
//       provide: NG_VALUE_ACCESSOR,
//       useExisting: forwardRef(() => AgeInputComponent),
//       multi: true,
//     },
//     {
//       provide: NG_VALIDATORS,
//       useExisting: forwardRef(() => AgeInputComponent),
//       multi: true,
//     }
//   ],
//   changeDetection: ChangeDetectionStrategy.OnPush,
// })
// export class AgeInputComponent implements ControlValueAccessor, OnInit, OnDestroy {

//   selectedUnit = AgeUnit.Year;
//   form: FormGroup;
//   ageUnits = [
//     {value: AgeUnit.Year, label: '岁'},
//     {value: AgeUnit.Month, label: '月'},
//     {value: AgeUnit.Day, label: '天'}
//   ];
//   dateOfBirth;
//   @Input() daysTop = 90;
//   @Input() daysBottom = 0;
//   @Input() monthsTop = 24;
//   @Input() monthsBottom = 1;
//   @Input() yearsBottom = 1;
//   @Input() yearsTop = 150;
//   @Input() debounceTime = 300;
//   private subBirth: Subscription;
//   private propagateChange = (_: any) => {};

//   constructor(private fb: FormBuilder) { }

//   ngOnInit() {
//     const initDate = this.dateOfBirth ? this.dateOfBirth : toDate(subYears(Date.now(), 30));
//     const initAge = this.toAge(initDate);
//     this.form = this.fb.group({
//       birthday: [initDate, this.validateDate],
//       age:  this.fb.group({
//         ageNum: [initAge.age],
//         ageUnit: [initAge.unit]
//       }, {validator: this.validateAge('ageNum', 'ageUnit')})
//     });
//     const birthday = this.form.get('birthday');
//     const ageNum = this.form.get('age').get('ageNum');
//     const ageUnit = this.form.get('age').get('ageUnit');

//     const birthday$ = birthday.valueChanges
//       .map(d => ({date: d, from: 'birthday'}))
//       .debounceTime(this.debounceTime)
//       .distinctUntilChanged()
//       .filter(date => birthday.valid);
//     const ageNum$ = ageNum.valueChanges
//       .startWith(ageNum.value)
//       .debounceTime(this.debounceTime)
//       .distinctUntilChanged();
//     const ageUnit$ = ageUnit.valueChanges
//       .startWith(ageUnit.value)
//       .debounceTime(this.debounceTime)
//       .distinctUntilChanged();
//     const age$ = Observable
//       .combineLatest(ageNum$, ageUnit$, (_num, _unit) => this.toDate({age: _num, unit: _unit}))
//       .map(d => ({date: d, from: 'age'}))
//       .filter(_ => this.form.get('age').valid);
//     const merged$ = Observable
//       .merge(birthday$, age$)
//       .filter(_ => this.form.valid)
//       .debug('[Age-Input][Merged]:');
//     this.subBirth = merged$.subscribe(date => {
//       const age = this.toAge(date.date);
//       if(date.from === 'birthday') {
//         if(age.age === ageNum.value && age.unit === ageUnit.value) {
//           return;
//         }
//         ageUnit.patchValue(age.unit, {emitEvent: false, emitModelToViewChange: true, emitViewToModelChange: true});
//         ageNum.patchValue(age.age, {emitEvent: false});
//         this.selectedUnit = age.unit;
//         this.propagateChange(date.date);

//       } else {
//         const ageToCompare = this.toAge(this.form.get('birthday').value);
//         if(age.age !== ageToCompare.age || age.unit !== ageToCompare.unit) {
//           this.form.get('birthday').patchValue(date.date, {emitEvent: false});
//           this.propagateChange(date.date);
//         }
//       }
//     });
//   }

//   ngOnDestroy() {
//     if(this.subBirth) {
//       this.subBirth.unsubscribe();
//     }
//   }

//   // 提供值的写入方法
//   public writeValue(obj: Date) {
//     if (obj) {
//       const date = toDate(obj);
//       this.form.get('birthday').patchValue(date, {emitEvent: true});
//     }
//   }

//   // 当表单控件值改变时，函数 fn 会被调用
//   // 这也是我们把变化 emit 回表单的机制
//   public registerOnChange(fn: any) {
//     this.propagateChange = fn;
//   }

//   // 这里没有使用，用于注册 touched 状态
//   public registerOnTouched() {
//   }

//   // 验证表单，验证结果正确返回 null 否则返回一个验证结果对象
//   validate(c: FormControl): {[key: string]: any} {
//     const val = c.value;
//     if (!val) {
//       return null;
//     }
//     if (isValidDate(val)) {
//       return null;
//     }
//     return {
//       ageInvalid: true
//     };
//   }

//   validateDate(c: FormControl): {[key: string]: any} {
//     const val = c.value;
//     return isValidDate(val) ? null : {
//       birthdayInvalid: true
//     }
//   }

//   validateAge(ageNumKey: string, ageUnitKey:string) {
//     return (group: FormGroup): {[key: string]: any} => {
//       const ageNum = group.controls[ageNumKey];
//       const ageUnit = group.controls[ageUnitKey];
//       let result = false;
//       const ageNumVal = ageNum.value;

//       switch (ageUnit.value) {
//         case AgeUnit.Year: {
//           result = ageNumVal >= this.yearsBottom && ageNumVal <= this.yearsTop
//           break;
//         }
//         case AgeUnit.Month: {
//           result = ageNumVal >= this.monthsBottom && ageNumVal <= this.monthsTop
//           break;
//         }
//         case AgeUnit.Day: {
//           result = ageNumVal >= this.daysBottom && ageNumVal <= this.daysTop
//           break;
//         }
//         default: {
//           result = false;
//           break;
//         }
//       }
//       return result ? null : {
//         ageInvalid: true
//       };
//     };
//   }

//   private toAge(dateStr: string): Age {
//     const date = parse(dateStr);
//     const now = new Date();
//     if (isBefore(subDays(now, this.daysTop), date)) {
//       return {
//         age: differenceInDays(now, date),
//         unit: AgeUnit.Day
//       };
//     } else if (isBefore(subMonths(now, this.monthsTop), date)) {
//       return {
//         age: differenceInMonths(now, date),
//         unit: AgeUnit.Month
//       };
//     } else {
//       return {
//         age: differenceInYears(now, date),
//         unit: AgeUnit.Year
//       };
//     }
//   }

//   private toDate(age: Age): string {
//     const now = new Date();
//     switch (age.unit) {
//       case AgeUnit.Year: {
//         return toDate(subYears(now, age.age));
//       }
//       case AgeUnit.Month: {
//         return toDate(subMonths(now, age.age));
//       }
//       case AgeUnit.Day: {
//         return toDate(subDays(now, age.age));
//       }
//       default: {
//         return this.dateOfBirth;
//       }
//     }
//   }
// }
