import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAnimesCategoriesComponent } from './list-animes-categories.component';

describe('ListAnimesCategoriesComponent', () => {
  let component: ListAnimesCategoriesComponent;
  let fixture: ComponentFixture<ListAnimesCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAnimesCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAnimesCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
