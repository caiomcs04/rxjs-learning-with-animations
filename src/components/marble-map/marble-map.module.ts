import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarbleMapComponent } from './marble-map.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    MarbleMapComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports: [MarbleMapComponent]
})
export class MarbleMapModule { }
