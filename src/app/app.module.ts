import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';

import {AppComponent} from './app.component';
import {DragableComponent} from './dragable/dragable.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Dragable2Component} from './dragable2/dragable2.component';
import {Game11Component, ImgOverviewDialogComponent} from './game11/game11.component';
import { ImgComponent } from './game11/img.component';
import { Game11AdminComponent } from './game11-admin/game11-admin.component';
import {FormsModule} from '@angular/forms';
import { DanceAnimationComponent } from './dance-animation/dance-animation.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    DragableComponent,
    Dragable2Component,
    Game11Component,
    ImgComponent,
    ImgOverviewDialogComponent,
    Game11AdminComponent,
    DanceAnimationComponent,
    DragAndDropComponent
  ],
  entryComponents: [
    ImgOverviewDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatTooltipModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
