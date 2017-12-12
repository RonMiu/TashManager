import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login/login.component'

const routes: Routes = [
    { path: '', redirectTo:'login', pathMatch:'full'},
    { path:'project',redirectTo:'project',pathMatch:'full'},
    { path:'task',redirectTo:'task',pathMatch:'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
