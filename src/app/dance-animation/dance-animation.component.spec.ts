import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceAnimationComponent } from './dance-animation.component';

describe('DanceAnimationComponent', () => {
  let component: DanceAnimationComponent;
  let fixture: ComponentFixture<DanceAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
