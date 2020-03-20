import {Component} from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

interface Choice {
  value: string;
  index: number;
}

@Component({
  selector: 'app-dragable2',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent {
  choicesList = [['choice1'], ['choice2'], ['choice3'], ['choice4']];
  answersList = [[null], [null], [null], [null]];


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer !== event.container) {
      console.log(event);
      const tmp = event.previousContainer.data[0];
      event.previousContainer.data[0] = event.container.data[0];
      event.container.data[0] = tmp;
    }
  }
}
