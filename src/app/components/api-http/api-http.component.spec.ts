import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiHttpComponent } from './api-http.component';

describe('ApiHttpComponent', () => {
  let component: ApiHttpComponent;
  let fixture: ComponentFixture<ApiHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
