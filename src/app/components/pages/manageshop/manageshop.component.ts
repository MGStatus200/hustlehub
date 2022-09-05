import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProdhomeService } from 'src/app/services/prodhome.service';
import { vServices } from 'src/app/models/vservices';
import { HireService } from 'src/app/services/hire.service';
import { Events } from 'src/app/models/event';
import { EventsService } from 'src/app/services/events.service';


@Component({
  selector: 'app-manageshop',
  templateUrl: './manageshop.component.html',
  styleUrls: ['./manageshop.component.css']
})
export class ManageshopComponent implements OnInit {

  products:Products[]=[];
  service:vServices[]=[];
  events:Events[]=[];

  constructor(
    private productsService:ProdhomeService,
    activatedRoute:ActivatedRoute,
    private hireService:HireService,
    private eventsServices:EventsService) {
    activatedRoute.params.subscribe((params)=>{
      this.products = productsService.getAllProducts();
      this.service = hireService.getAllServices();
      this.events = eventsServices.getAllEvents();

    })
   }
  ngOnInit(): void {
  }

}
