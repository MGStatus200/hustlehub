import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HirecategoriesComponent } from './hirecategories.component';

describe('HirecategoriesComponent', () => {
  let component: HirecategoriesComponent;
  let fixture: ComponentFixture<HirecategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HirecategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HirecategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
