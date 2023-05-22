import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarjeta6Component } from './tarjeta6.component';

describe('Tarjeta6Component', () => {
  let component: Tarjeta6Component;
  let fixture: ComponentFixture<Tarjeta6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tarjeta6Component]
    });
    fixture = TestBed.createComponent(Tarjeta6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
