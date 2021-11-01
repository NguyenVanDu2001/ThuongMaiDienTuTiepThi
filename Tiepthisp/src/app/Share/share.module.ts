import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
@NgModule({
  imports: [
    FormsModule,
    PanelModule,
    InputTextModule,
    CommonModule,
    CalendarModule,
    DropdownModule,
    FileUploadModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    PanelModule,
    InputTextModule,
    CommonModule,
    CalendarModule,
    DropdownModule,
    FileUploadModule
  ],
})
export class ShareModule { }
