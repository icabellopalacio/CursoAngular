import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LstCursoComponent } from './lst-curso.component';

describe('LstCursoComponent', () => {
  let component: LstCursoComponent;
  let fixture: ComponentFixture<LstCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LstCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LstCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
