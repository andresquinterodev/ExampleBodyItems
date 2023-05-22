import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarjeta9Component } from './tarjeta9.component';

describe('Tarjeta9Component', () => {
  let component: Tarjeta9Component;
  let fixture: ComponentFixture<Tarjeta9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tarjeta9Component]
    });
    fixture = TestBed.createComponent(Tarjeta9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
