import {Component, OnInit} from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  query
} from '@angular/animations';

const moveRight = trigger('moveRight', [
  transition('* <=> *', [
    query(':leave', style({transform: 'translateX(80px)'}), { optional: true }),
    query(':enter', style({}), { optional: true })
  ])
]);
const moveLeft = trigger('moveLeft', []);

@Component({
  selector: 'app-dance-animation',
  templateUrl: './dance-animation.component.html',
  styleUrls: ['./dance-animation.component.scss'],
  animations: [moveRight]
})
export class DanceAnimationComponent {

  constructor() { }

  score = 0;
  score2 = 0;
  lock = true;

  addScore() {
    if (this.score + this.score2 < 8) {
      if (this.lock) {
        this.score++;
        this.lock = false;
      } else {
        this.score2++;
        this.lock = true;
      }
    }
  }
}
