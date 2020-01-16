import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { DragableComponent } from './dragable/dragable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Dragable2Component } from './dragable2/dragable2.component';

@NgModule({
  declarations: [
    AppComponent,
    DragableComponent,
    Dragable2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
