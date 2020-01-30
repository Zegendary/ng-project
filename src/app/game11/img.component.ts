import {Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';
import {Option} from './option';
import {MatTooltip} from '@angular/material';

@Component({
  selector: 'app-game11-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ImgComponent {
  @Input()
  options: Option[];
  @Input()
  selections: number[];
  @Input()
  status: string;
  @Output() toggled = new EventEmitter<number>();

  onClick(id: number, tooltip: MatTooltip) {
    if (this.status === 'selecting') {
      this.toggled.emit(id);
    } else if (this.status === 'review') {
      tooltip.toggle();
    }
  }

  constructor() { }

}
