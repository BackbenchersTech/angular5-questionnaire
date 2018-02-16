import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NolocationComponent } from './nolocation.component';

describe('NolocationComponent', () => {
  let component: NolocationComponent;
  let fixture: ComponentFixture<NolocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NolocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NolocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
