import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNoComponent } from './prime-no.component';

describe('PrimeNoComponent', () => {
  let component: PrimeNoComponent;
  let fixture: ComponentFixture<PrimeNoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrimeNoComponent]
    });
    fixture = TestBed.createComponent(PrimeNoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
