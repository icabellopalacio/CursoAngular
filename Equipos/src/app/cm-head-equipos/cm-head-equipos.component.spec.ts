import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmHeadEquiposComponent } from './cm-head-equipos.component';

describe('CmHeadEquiposComponent', () => {
  let component: CmHeadEquiposComponent;
  let fixture: ComponentFixture<CmHeadEquiposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmHeadEquiposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmHeadEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
