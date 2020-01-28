import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game11Component } from './game11.component';

describe('Game11Component', () => {
  let component: Game11Component;
  let fixture: ComponentFixture<Game11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
