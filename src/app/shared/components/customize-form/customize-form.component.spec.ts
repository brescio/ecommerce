import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeFormComponent } from './customize-form.component';

describe('CustomizeFormComponent', () => {
  let component: CustomizeFormComponent;
  let fixture: ComponentFixture<CustomizeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomizeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomizeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
