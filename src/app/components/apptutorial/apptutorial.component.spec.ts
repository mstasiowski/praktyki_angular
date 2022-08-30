import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptutorialComponent } from './apptutorial.component';

describe('ApptutorialComponent', () => {
  let component: ApptutorialComponent;
  let fixture: ComponentFixture<ApptutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApptutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApptutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
