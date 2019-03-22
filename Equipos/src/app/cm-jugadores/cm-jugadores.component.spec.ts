import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmJugadoresComponent } from './cm-jugadores.component';

describe('CmJugadoresComponent', () => {
  let component: CmJugadoresComponent;
  let fixture: ComponentFixture<CmJugadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmJugadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmJugadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
