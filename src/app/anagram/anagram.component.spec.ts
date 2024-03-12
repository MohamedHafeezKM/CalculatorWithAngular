import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagramComponent } from './anagram.component';

describe('AnagramComponent', () => {
  let component: AnagramComponent;
  let fixture: ComponentFixture<AnagramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnagramComponent]
    });
    fixture = TestBed.createComponent(AnagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
