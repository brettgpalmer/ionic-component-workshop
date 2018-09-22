import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExamplePage } from './card-example.page';

describe('CardExamplePage', () => {
  let component: CardExamplePage;
  let fixture: ComponentFixture<CardExamplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardExamplePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardExamplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
