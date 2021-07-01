import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkAnswerComponent } from './homework-answer.component';

describe('HomeworkAnswerComponent', () => {
  let component: HomeworkAnswerComponent;
  let fixture: ComponentFixture<HomeworkAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeworkAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
