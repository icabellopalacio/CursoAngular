import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServUsersComponent } from './serv-users.component';

describe('ServUsersComponent', () => {
  let component: ServUsersComponent;
  let fixture: ComponentFixture<ServUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
