import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExamplePage } from './list-example.page';

describe('ListExamplePage', () => {
  let component: ListExamplePage;
  let fixture: ComponentFixture<ListExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
