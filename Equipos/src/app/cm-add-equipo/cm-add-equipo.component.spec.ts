import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmAddEquipoComponent } from './cm-add-equipo.component';

describe('CmAddEquipoComponent', () => {
  let component: CmAddEquipoComponent;
  let fixture: ComponentFixture<CmAddEquipoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmAddEquipoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmAddEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
