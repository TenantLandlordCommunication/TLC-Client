import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtenantComponent } from './addtenant.component';

describe('AddtenantComponent', () => {
  let component: AddtenantComponent;
  let fixture: ComponentFixture<AddtenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
