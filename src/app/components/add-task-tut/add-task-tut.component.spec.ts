import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskTutComponent } from './add-task-tut.component';

describe('AddTaskTutComponent', () => {
  let component: AddTaskTutComponent;
  let fixture: ComponentFixture<AddTaskTutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskTutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskTutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
