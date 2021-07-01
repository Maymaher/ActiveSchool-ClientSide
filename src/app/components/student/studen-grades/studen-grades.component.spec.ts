import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenGradesComponent } from './studen-grades.component';

describe('StudenGradesComponent', () => {
  let component: StudenGradesComponent;
  let fixture: ComponentFixture<StudenGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenGradesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
