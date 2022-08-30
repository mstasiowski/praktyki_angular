import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTaskTutComponent } from './todo-task-tut.component';

describe('TodoTaskTutComponent', () => {
  let component: TodoTaskTutComponent;
  let fixture: ComponentFixture<TodoTaskTutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTaskTutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoTaskTutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
