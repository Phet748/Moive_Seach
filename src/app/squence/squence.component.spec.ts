import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquenceComponent } from './squence.component';

describe('SquenceComponent', () => {
  let component: SquenceComponent;
  let fixture: ComponentFixture<SquenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SquenceComponent]
    });
    fixture = TestBed.createComponent(SquenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
