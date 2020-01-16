import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dragable2Component } from './dragable2.component';

describe('Dragable2Component', () => {
  let component: Dragable2Component;
  let fixture: ComponentFixture<Dragable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dragable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dragable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
