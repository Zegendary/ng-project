import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DragableComponent} from './dragable/dragable.component';


const routes: Routes = [
  { path: '', component: DragableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
