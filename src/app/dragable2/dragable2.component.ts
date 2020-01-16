import {Component} from '@angular/core';
import {CdkDragDrop, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';

interface Choice {
  value: string;
  index: number;
}

@Component({
  selector: 'app-dragable2',
  templateUrl: './dragable2.component.html',
  styleUrls: ['./dragable2.component.scss']
})
export class Dragable2Component {
  choices: (null | Choice)[] = [
    {value: 'choice1', index: 0},
    {value: 'choice2', index: 1},
    {value: 'choice3', index: 2},
    {value: 'choice4', index: 3}
  ];
  answers: (null | Choice)[] = [null, null, null, null];


  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer !== event.container) {
      if (event.container.data.type === 'answer') {
        if (event.item.data.type === 'answer') {
          this.answers[event.container.data.index] = event.item.data.answer;
          this.answers[event.previousContainer.data.index] = null;
        } else {
          this.answers[event.container.data.index] = event.item.data;
          this.choices[event.item.data.index] = null;
        }
      } else {
        this.answers[event.previousContainer.data.index] = null;
        this.choices[event.item.data.answer.index] = event.item.data.answer;
      }
      console.log(event);
    }
  }

  answerPredicate(item: CdkDrag, list: CdkDropList) {
    return list.data.answer === null;
  }
}
