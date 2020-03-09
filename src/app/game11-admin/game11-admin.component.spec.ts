import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Game11AdminComponent } from './game11-admin.component';

describe('Game11AdminComponent', () => {
  let component: Game11AdminComponent;
  let fixture: ComponentFixture<Game11AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Game11AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Game11AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
