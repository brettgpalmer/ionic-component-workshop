import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonExamplePage } from './button-example.page';

describe('ButtonExamplePage', () => {
  let component: ButtonExamplePage;
  let fixture: ComponentFixture<ButtonExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
