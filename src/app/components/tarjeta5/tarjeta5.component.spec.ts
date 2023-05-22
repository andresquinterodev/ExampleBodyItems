import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarjeta5Component } from './tarjeta5.component';

describe('Tarjeta5Component', () => {
  let component: Tarjeta5Component;
  let fixture: ComponentFixture<Tarjeta5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tarjeta5Component]
    });
    fixture = TestBed.createComponent(Tarjeta5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
