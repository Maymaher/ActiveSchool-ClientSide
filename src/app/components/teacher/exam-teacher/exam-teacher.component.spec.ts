import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamTeacherComponent } from './exam-teacher.component';

describe('ExamTeacherComponent', () => {
  let component: ExamTeacherComponent;
  let fixture: ComponentFixture<ExamTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
