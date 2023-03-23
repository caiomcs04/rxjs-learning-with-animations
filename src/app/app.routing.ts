import { MarbleFilterComponent } from './../components/marble-filter/marble-filter.component';
import { MarbleMapComponent } from './../components/marble-map/marble-map.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarbleReduceComponent } from 'src/components/marble-reduce/marble-reduce.component';

const routes: Routes = [
  { path: 'map', component: MarbleMapComponent },
  { path: 'filter', component: MarbleFilterComponent },
  { path: 'reduce', component: MarbleReduceComponent },


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
