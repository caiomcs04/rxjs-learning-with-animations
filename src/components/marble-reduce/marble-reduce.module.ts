import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarbleReduceComponent } from './marble-reduce.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MarbleReduceComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [MarbleReduceComponent]
})
export class MarbleReduceModule { }
