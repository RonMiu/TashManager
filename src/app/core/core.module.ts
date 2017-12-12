import { NgModule,SkipSelf,Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MdToolbarModule, MdIconModule,MdButtonModule } from '@angular/material'
import { SharedModule } from '../shared/shared.module'
import { HttpModule } from '@angular/http'
import {MdIconRegistry} from '@angular/material'
import {DomSanitizer} from '@angular/platform-browser'
import { loadSvgResources } from '../util/svg.util'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {LoginModule} from '../login/login.module'
import { LoginComponent} from '../login/login/login.component'
import {AppEffectsModule} from '../effects'
import {Router,RouterModule} from '@angular/router'
import {AppRoutingModule } from '../app-routing.module';
import {ServicesModule } from '../services/services.module'
import { AppStoreModule } from '../reducers'
import 'hammerjs';
import '../util/debug.util'
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/concat';
import 'rxjs/add/observable/zip';
import 'rxjs/add/observable/range';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/count';
import 'rxjs/add/operator/do';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SharedModule,
    AppStoreModule,
    BrowserAnimationsModule,
    LoginModule,
    RouterModule,
    AppEffectsModule,
    ServicesModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent],
  exports:[
    HeaderComponent, 
    FooterComponent, 
    SidebarComponent,
    AppRoutingModule],
  providers:[
    {
      provide:'BASE_CONFIG',useValue:{
        uri:'http://localhost:3000',
      }
    }
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() private parent:CoreModule,
    ir:MdIconRegistry,ds:DomSanitizer
  ){
    if(parent){
      throw new Error('模块已存在, 不能再加载!')
    }
    loadSvgResources(ir,ds)
  }
 }
