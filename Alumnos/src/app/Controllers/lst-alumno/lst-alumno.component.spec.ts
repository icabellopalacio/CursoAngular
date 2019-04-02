import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LstAlumnoComponent } from './lst-alumno.component';

describe('LstAlumnoComponent', () => {
  let component: LstAlumnoComponent;
  let fixture: ComponentFixture<LstAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LstAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LstAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
