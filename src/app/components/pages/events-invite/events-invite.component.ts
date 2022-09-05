import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Events } from 'src/app/models/event';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-invite',
  templateUrl: './events-invite.component.html',
  styleUrls: ['./events-invite.component.css']
})
export class EventsInviteComponent implements OnInit {

  events:Events[]=[];

  constructor(private eventsServices:EventsService,activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params)=>{
      if(params.esearchTerm){
        this.events = this.eventsServices.getAllEventsBySearchTerm(params.esearchTerm)
      }else if(params.ecategory){
        this.events = this.eventsServices.getEventsByCategory(params.ecategory);
      }else
      this.events = eventsServices.getAllEvents();
    })
  }
  ngOnInit(): void {
  }

}
