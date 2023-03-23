import { MarbleFilterModule } from './../components/marble-filter/marble-filter.module';
import { RouterModule } from '@angular/router';
import { HeaderModule } from './../components/header/header.module';
import { MarbleMapModule } from './../components/marble-map/marble-map.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { MarbleReduceModule } from 'src/components/marble-reduce/marble-reduce.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,MarbleMapModule,MarbleFilterModule, MarbleReduceModule,HeaderModule,RouterModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
