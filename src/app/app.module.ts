import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module'
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module'
import {ProjectModule} from './project/project.module'
import {LoginComponent} from './login/login/login.component'
import {TaskModule} from './task/task.module';
import {ServicesModule} from './services/services.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    ProjectModule,
    TaskModule,
    CoreModule,
    SharedModule,
    ServicesModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
