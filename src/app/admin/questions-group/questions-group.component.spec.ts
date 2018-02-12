import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsGroupComponent } from './questions-group.component';

describe('QuestionsGroupComponent', () => {
  let component: QuestionsGroupComponent;
  let fixture: ComponentFixture<QuestionsGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionsGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
