import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarjeta8Component } from './tarjeta8.component';

describe('Tarjeta8Component', () => {
  let component: Tarjeta8Component;
  let fixture: ComponentFixture<Tarjeta8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tarjeta8Component]
    });
    fixture = TestBed.createComponent(Tarjeta8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
