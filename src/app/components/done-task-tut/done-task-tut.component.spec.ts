import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneTaskTutComponent } from './done-task-tut.component';

describe('DoneTaskTutComponent', () => {
  let component: DoneTaskTutComponent;
  let fixture: ComponentFixture<DoneTaskTutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneTaskTutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoneTaskTutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
