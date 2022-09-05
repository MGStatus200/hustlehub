import { Injectable } from '@angular/core';
import { sample_eventcategories, sample_events } from 'src/data';
import { Events } from '../models/event';
import { eventcategory } from '../models/eventcategories';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  getAllEvents():Events[]{
    return sample_events;
  }

  getAllCategories():eventcategory[]{
    return sample_eventcategories;
  }
  getAllEventsBySearchTerm(esearchTerm:string){
    return this.getAllEvents().filter((event)=>{
      return event.name.toLowerCase().includes(esearchTerm.toLowerCase());

    });
  }
  getEventsByCategory(ecategory:string):Events[]{
    return ecategory ==="All"?
    this.getAllEvents():
    this.getAllEvents().filter(event=>{
      return event.categories?.includes(ecategory)
    });
  }
  getEventById(eventId: string):Events{
    return this.getAllEvents().find(event =>{
      return event.id === eventId  //when this part is undefiend return
    }) ?? new Events();  //return new Food

  }

  constructor() { }
}
