import {Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import {CdkDragEnd} from '@angular/cdk/drag-drop';

interface AnswerContainerPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

const AnswerContainerPadding = 20;

@Component({
  selector: 'app-dragable',
  templateUrl: './dragable.component.html',
  styleUrls: ['./dragable.component.scss']
})
export class DragableComponent implements AfterViewInit {
  choices = [
    {value: 'choice1', dragPosition: {x: 0, y: 0}, answerIndex: null},
    {value: 'choice2', dragPosition: {x: 0, y: 0}, answerIndex: null},
    {value: 'choice3', dragPosition: {x: 0, y: 0}, answerIndex: null},
    {value: 'choice4', dragPosition: {x: 0, y: 0}, answerIndex: null},
  ];
  answers: (null | string)[] = [null, null, null, null];
  answerContainerPositions: AnswerContainerPosition[] = [];
  @ViewChild('myAnswers', {static: false}) answersView: ElementRef;

  ngAfterViewInit() {
    Array.prototype.forEach.call(this.answersView.nativeElement.children, (answer) => {
      const position = answer.getBoundingClientRect();
      this.answerContainerPositions.push({
        x: position.left + document.documentElement.scrollLeft,
        y: position.top + document.documentElement.scrollTop,
        width: position.width,
        height: position.height
      });
    });
  }

  end(event: CdkDragEnd) {
    const element = event.source.element.nativeElement;
    const choice = this.choices[element.getAttribute('data-index')];
    const X: number = element.getBoundingClientRect().left + document.documentElement.scrollLeft;
    const Y: number = element.getBoundingClientRect().top + document.documentElement.scrollTop;
    const WIDTH: number = element.offsetWidth;
    const HEIGHT: number = element.offsetHeight;
    const answerIndex = this.answerContainerPositions.findIndex((position) => {
      return X > position.x && Y > position.y && X + WIDTH < position.x + position.width && Y + HEIGHT < position.y + position.height;
    });
    if (answerIndex === -1) {
      choice.dragPosition = {x: 0, y: 0};
      if (choice.answerIndex !== null) {
        this.answers[choice.answerIndex] = null;
      }
      choice.answerIndex = null;
    } else {
      if (this.choices.some(c => c.answerIndex === answerIndex)) {
        choice.dragPosition = {x: choice.dragPosition.x, y: choice.dragPosition.y};
        return;
      }
      if (choice.answerIndex !== null) {
        this.answers[choice.answerIndex] = null;
      }
      const answerPosition = this.answerContainerPositions[answerIndex];
      this.answers[answerIndex] = choice.value;
      choice.answerIndex = answerIndex;
      choice.dragPosition = {
        x: answerPosition.x - element.offsetLeft + AnswerContainerPadding,
        y: answerPosition.y - element.offsetTop + AnswerContainerPadding
      };
    }
  }
}
