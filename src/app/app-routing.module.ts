import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DragableComponent} from './dragable/dragable.component';
import {Dragable2Component} from './dragable2/dragable2.component';
import {Game11Component} from './game11/game11.component';
import {Game11AdminComponent} from './game11-admin/game11-admin.component';


const routes: Routes = [
  { path: '', component: DragableComponent },
  { path: 'dragable2', component: Dragable2Component },
  { path: 'game11', component: Game11Component },
  { path: 'game11-admin', component: Game11AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
