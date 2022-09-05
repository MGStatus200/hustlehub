import { Injectable } from '@angular/core';
import { sample_hirecatergories, sample_services } from 'src/data';
import { hirecategory } from '../models/hirecategories';
import { vServices } from '../models/vservices';

@Injectable({
  providedIn: 'root'
})
export class HireService {

  getAllServices():vServices[]{
    return sample_services;
  }

  getAllCategories():hirecategory[]{
    return sample_hirecatergories;
  }
  getAllServicesBySearchTerm(hsearchTerm:string){
    return this.getAllServices().filter((service)=>{
      return service.name.toLowerCase().includes(hsearchTerm.toLowerCase());

    });
  }
  getServicesByCategory(hcategory:string):vServices[]{
    return hcategory ==="All"?
    this.getAllServices():
    this.getAllServices().filter(service=>{
      return service.categories?.includes(hcategory)
    });
  }
  getServiceById(serviceId: string):vServices{
    return this.getAllServices().find(service =>{
      return service.id === serviceId  //when this part is undefiend return
    }) ?? new vServices();  //return new Food

  }
  constructor() { }
}
