import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MdToolbarModule, 
         MdIconModule,
         MdButtonModule,
         MdCardModule, 
         MdInputModule,
         MdListModule,
         MdGridListModule,
         MdDialogModule,
         MdAutocompleteModule,
         MdMenuModule,
         MdCheckboxModule,
         MdTooltipModule,
         MdDatepickerModule,
         MdRadioModule,
         MdNativeDateModule,
         MdSelectModule,
         MdSidenavModule } from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component'
import {DirectiveModule} from '../directive/directive.module';
import { ImageListSelectComponent } from './image-list-select/image-list-select.component';
// import { AgeInputComponent } from './age-input/age-input.component'

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
    MdToolbarModule, 
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdGridListModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdMenuModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdDatepickerModule,
    MdRadioModule,
    MdNativeDateModule,
    MdSelectModule,
    MdSidenavModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    CommonModule,
    DirectiveModule,
    MdToolbarModule, 
    MdIconModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdListModule,
    MdGridListModule,
    MdDialogModule,
    MdAutocompleteModule,
    MdMenuModule,
    MdCheckboxModule,
    MdTooltipModule,
    MdDatepickerModule,
    MdRadioModule,
    MdNativeDateModule,
    MdSelectModule,
    MdSidenavModule,
    ReactiveFormsModule,
    FormsModule,
    ImageListSelectComponent,
    // AgeInputComponent
  ],
  declarations: [
    ConfirmDialogComponent, 
    ImageListSelectComponent, 
    // AgeInputComponent
  ],
  entryComponents:[
    ConfirmDialogComponent
  ]
})
export class SharedModule { }
