import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DragableComponent} from './dragable/dragable.component';
import {Dragable2Component} from './dragable2/dragable2.component';


const routes: Routes = [
  { path: '', component: DragableComponent },
  { path: 'dragable2', component: Dragable2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
