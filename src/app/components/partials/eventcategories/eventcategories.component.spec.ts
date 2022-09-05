import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventcategoriesComponent } from './eventcategories.component';

describe('EventcategoriesComponent', () => {
  let component: EventcategoriesComponent;
  let fixture: ComponentFixture<EventcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventcategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
