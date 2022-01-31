import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HightlightsComponent } from './hightlights.component';

describe('HightlightsComponent', () => {
  let component: HightlightsComponent;
  let fixture: ComponentFixture<HightlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HightlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HightlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
