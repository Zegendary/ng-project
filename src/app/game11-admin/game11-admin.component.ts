import {Component} from '@angular/core';

@Component({
  selector: 'app-game11-admin',
  templateUrl: './game11-admin.component.html',
  styleUrls: ['./game11-admin.component.scss']
})

export class Game11AdminComponent {

  constructor() { }

  areas: Area[] = [
    {dummy: true, width: 9, height: 9, x: 11.5, y: 4.5},
    {dummy: false, width: 7, height: 11, x: 10, y: 37, text: 'aaaaaa'},
    {dummy: false, width: 10, height: 10, x: 14, y: 57, text: 'wwwwww'},
    {dummy: false, width: 10, height: 11, x: 77, y: 6, text: 'qqqqqq'},
  ];
  lock = true;
  startX = 0;
  startY = 0;
  currentX = 0;
  currentY = 0;

  onDelete(index: number) {
    this.areas.splice(index, 1);
  }

  drawArea(event: MouseEvent) {
    if (this.lock) {
      this.lock = false;
      this.startX = parseFloat((event.offsetX / (event.target as HTMLImageElement).width).toFixed(4)) * 100;
      this.startY = parseFloat((event.offsetY / (event.target as HTMLImageElement).height).toFixed(4)) * 100;
      this.areas.push({
        dummy: false,
        width: 0,
        height: 0,
        x: this.startX,
        y: this.startY,
        text: ''
      });
    } else {
      this.lock = true;
      this.startX = 0;
      this.startY = 0;
      this.currentX = 0;
      this.currentY = 0;
    }
  }

  recordLocation(event: MouseEvent) {
    if (!this.lock) {
      this.currentX = parseFloat((event.offsetX / (event.target as HTMLImageElement).width).toFixed(4)) * 100;
      this.currentY = parseFloat((event.offsetY / (event.target as HTMLImageElement).height).toFixed(4)) * 100;
      const area = this.areas[this.areas.length - 1];
      area.width = Math.abs(this.currentX - this.startX);
      area.height = Math.abs(this.currentY - this.startY);
      area.x = this.currentX > this.startX ? this.startX : this.currentX;
      area.y = this.currentY > this.startY ? this.startY : this.currentY;
    }
  }
}
