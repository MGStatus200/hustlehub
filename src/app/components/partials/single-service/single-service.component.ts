import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { vServices } from 'src/app/models/vservices';
import { HireService } from 'src/app/services/hire.service';

@Component({
  selector: 'app-single-service',
  templateUrl: './single-service.component.html',
  styleUrls: ['./single-service.component.css']
})
export class SingleServiceComponent implements OnInit {

  service!:vServices;
  constructor(
            activatedRoute:ActivatedRoute,
    private serviceService:HireService,
    ) {
      activatedRoute.params.subscribe((params)=>{
        if(params.id) //if not null of undefined
        this.service = this.serviceService.getServiceById(params.id);
      })

    }

  ngOnInit(): void {
  }

}
