import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarbleFilterComponent } from './marble-filter.component';



@NgModule({
  declarations: [
    MarbleFilterComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [
    MarbleFilterComponent
  ]
})
export class MarbleFilterModule { }
