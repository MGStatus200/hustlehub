import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsInviteComponent } from './events-invite.component';

describe('EventsInviteComponent', () => {
  let component: EventsInviteComponent;
  let fixture: ComponentFixture<EventsInviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsInviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
