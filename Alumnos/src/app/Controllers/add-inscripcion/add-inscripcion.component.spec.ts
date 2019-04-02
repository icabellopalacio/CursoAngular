import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInscripcionComponent } from './add-inscripcion.component';

describe('AddInscripcionComponent', () => {
  let component: AddInscripcionComponent;
  let fixture: ComponentFixture<AddInscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
