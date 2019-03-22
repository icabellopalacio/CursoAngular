import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmListEquiposComponent } from './cm-list-equipos.component';

describe('CmListEquiposComponent', () => {
  let component: CmListEquiposComponent;
  let fixture: ComponentFixture<CmListEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmListEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmListEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
