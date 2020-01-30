import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {Option} from './option';

export interface DialogData {
  options: Option[];
  status: string;
  selections: number[];
  toggle: (id: number) => void;
}

@Component({
  selector: 'app-game11',
  templateUrl: './game11.component.html',
  styleUrls: ['./game11.component.scss']
})

export class Game11Component {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public dialog: MatDialog) {
    iconRegistry.addSvgIcon(
      'check-circle',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/check-circle.svg'));
    iconRegistry.addSvgIcon(
      'zoom-in',
      sanitizer.bypassSecurityTrustResourceUrl('../../assets/icon/zoom-in.svg'));
  }

  options: Option[] = [
    {id: 0, correct: false, width: 9, height: 9, x: 11.5, y: 4.5},
    {id: 1, correct: true, width: 7, height: 11, x: 10, y: 37, text: 'aaaaaa'},
    {id: 2, correct: true, width: 10, height: 10, x: 14, y: 57, text: 'wwwwww'},
    {id: 3, correct: true, width: 10, height: 11, x: 77, y: 6, text: 'qqqqqq'},
    {id: 4, correct: false, width: 40, height: 16, x: 21, y: 36},
    {id: 5, correct: true, width: 5, height: 10, x: 1, y: 70, text: '333333'},
    {id: 6, correct: true, width: 10, height: 43, x: 64, y: 22, text: 'ddddddd'},
    {id: 7, correct: true, width: 9, height: 21, x: 7, y: 78, text: 'sssssss'},
    {id: 8, correct: true, width: 14, height: 17, x: 40, y: 81, text: 'aaaaaa'},
    {id: 9, correct: true, width: 17, height: 23, x: 55, y: 72, text: 'cccccc'},
    {id: 10, correct: true, width: 14, height: 9, x: 82, y: 90, text: 'abcdefg'},
    {id: 11, correct: true, width: 9, height: 10, x: 74.5, y: 55, text: 'abcdefg'},
    {id: 12, correct: true, width: 9, height: 10, x: 90, y: 37, text: 'abcdefg'}
  ];

  status: ('selecting' | 'checked' | 'review' | 'result') = 'selecting';
  selections: number[] = [];
  score: number;
  totalScore: number = this.options.filter(o => o.correct).length * 10;

  toggle(id: number): void {
    if (this.selections.includes(id)) {
      this.selections = this.selections.filter(s => s !== id);
    } else {
      this.selections.push(id);
    }
  }

  check(): void {
    this.status = 'checked';
    const tmpScore = this.selections.reduce((a: number, b: number) => {
      const option = this.options.filter(o => o.id === b)[0];
      if (option.correct) {
        a += 10;
      } else {
        a -= 10;
      }
      return a;
    }, 0);
    this.score = tmpScore > 0 ? tmpScore : 0;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ImgOverviewDialogComponent, {
      width: '886px',
      height: '620px',
      maxWidth: 'none',
      panelClass: 'game-11-dialog',
      data: {
        options: this.options,
        selections: this.selections,
        status: this.status,
        toggle: this.toggle
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'app-img-overview-dialog',
  templateUrl: 'dialog.html',
})
export class ImgOverviewDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ImgOverviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}


}
