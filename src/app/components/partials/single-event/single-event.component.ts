import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Events } from 'src/app/models/event';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})
export class SingleEventComponent implements OnInit {

  event!:Events;
  constructor(
            activatedRoute:ActivatedRoute,
    private eventService:EventsService,
    ) {
      activatedRoute.params.subscribe((params)=>{
        if(params.id) //if not null of undefined
        this.event = this.eventService.getEventById(params.id);
      })

    }
  ngOnInit(): void {
  }

}
