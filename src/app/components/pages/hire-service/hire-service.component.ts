import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { vServices } from 'src/app/models/vservices';
import { HireService } from 'src/app/services/hire.service';

@Component({
  selector: 'app-hire-service',
  templateUrl: './hire-service.component.html',
  styleUrls: ['./hire-service.component.css']
})
export class HireServiceComponent implements OnInit {

  service:vServices[]=[];

  constructor(private hireService:HireService,activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params)=>{
      if(params.hcategory){
        this.service = this.hireService.getServicesByCategory(params.hcategory);
      }else if(params.hsearchTerm){
        this.service = this.hireService.getAllServicesBySearchTerm(params.hsearchTerm)
      }else
        this.service = hireService.getAllServices();
      })
   }

  ngOnInit(): void {
  }

}
