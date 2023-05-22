import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarjeta7Component } from './tarjeta7.component';

describe('Tarjeta7Component', () => {
  let component: Tarjeta7Component;
  let fixture: ComponentFixture<Tarjeta7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tarjeta7Component]
    });
    fixture = TestBed.createComponent(Tarjeta7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
