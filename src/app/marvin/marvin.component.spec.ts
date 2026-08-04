import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvinComponent } from './marvin.component';

describe('MarvinComponent', () => {
  let component: MarvinComponent;
  let fixture: ComponentFixture<MarvinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarvinComponent]
    });
    fixture = TestBed.createComponent(MarvinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
