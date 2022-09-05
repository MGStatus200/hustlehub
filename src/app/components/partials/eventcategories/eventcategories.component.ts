import { Component, OnInit } from '@angular/core';
import { eventcategory } from 'src/app/models/eventcategories';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-eventcategories',
  templateUrl: './eventcategories.component.html',
  styleUrls: ['./eventcategories.component.css']
})
export class EventcategoriesComponent implements OnInit {

  categories?:eventcategory[];

  constructor(eventService:EventsService) {
    this.categories = eventService.getAllCategories();
  }
  ngOnInit(): void {
  }

}
