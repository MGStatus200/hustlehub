import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireServiceSearchComponent } from './hire-service-search.component';

describe('HireServiceSearchComponent', () => {
  let component: HireServiceSearchComponent;
  let fixture: ComponentFixture<HireServiceSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireServiceSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HireServiceSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
