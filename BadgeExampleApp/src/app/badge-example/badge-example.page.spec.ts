import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeExamplePage } from './badge-example.page';

describe('BadgeExamplePage', () => {
  let component: BadgeExamplePage;
  let fixture: ComponentFixture<BadgeExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
